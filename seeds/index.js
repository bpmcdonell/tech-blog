const sequelize = require('../config/connection');
const seedUser = require('./userSeeds');
const seedPost = require('./postSeeds');
const seedComment = require('./commentSeeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUser();
    console.log('--------------');

    await seedPost();
    console.log('--------------');

    await seedComment();
    console.log('--------------');

    process.exit(0);
}

seedAll();
