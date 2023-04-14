const User = require('../models/User');

const userData = [
    {
        username: 'johndoe',
        password: 'password12345'
    },
    {
        username: 'testuser',
        password: 'test'
    },
    {
        username: 'testuser2',
        password: 'test'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
