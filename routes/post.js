const express = require('express');
const router = express.Router();

const { getPosts, createPost } = require('../controllers/post');


router.get('/', getPosts);
router.post('/post', createPost);

module.exports = router;