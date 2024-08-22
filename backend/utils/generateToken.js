import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET,
    {
      expiresIn: '30d'
    });

    // set JWT  as HTTP-ONLY cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      samesite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 Days
    });
}

export default generateToken;