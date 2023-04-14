const router = require('express').Router();
const User = require('../../models/User');
const Post = require('../../models/Post');

router.post('/newPost', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            body: req.body.content,
            date: new Date(),
            user_id: req.session.user_id
        });
        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/deletepost/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/editpost/:id', async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                body: req.body.body,
                date: new Date()
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.render('dashboard', {
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;