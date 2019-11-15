const Post = require('../models/Post');

const { createPostValidator } = require('../validator');

exports.getPosts = (req, res) => {
    res.json({
        posts: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
    })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post
        .save()
        .then(post => res.json({ post }))
        .catch(error => res.status(400).json({ error }))
}