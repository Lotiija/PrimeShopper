import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sammy',
    email: 'sammy@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Ekpu Acho',
    email: 'ekpu@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  }
];

export default users;