const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPost, deletePost, updatePost } = require('../Controllers/posts')


router.get('/', getPosts);
router.get('/post/:id', getPost);
router.post('/', createPost);
router.delete('/post/:id', deletePost);
router.put('/', updatePost);

module.exports = router;