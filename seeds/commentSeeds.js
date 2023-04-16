const Comment = require('../models/Comment');

const commentData = [
    {
        body: 'This is a comment1',
        user_id: 1,
        post_id: 1
    },
    {
        body: 'This is a comment2',
        user_id: 2,
        post_id: 2
    },
    {
        body: 'This is a comment3',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;


