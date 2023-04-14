const Post = require('../models/Post');

const postData = [
    {
        title: 'My first post',
        body: 'This is my first post',
        user_id: 1
    },
    {
        title: 'seed post 2',
        body: 'This is my second post',
        user_id: 2
    },
    {
        title: 'seed post 3',
        body: 'This is my third post',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
