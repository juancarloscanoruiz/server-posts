const Post = require('../Models/Post');

exports.getPosts = async function(req, res) {
    try {
        const posts = await Post.findAll();
        res.status(200).json({
            code: 200,
            success: true,
            data: posts,
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            success: false,
            message: error,
        })
    }
}

exports.createPost = async function(req, res){
    // Required data to create the post
    const { title, shortDescription, fullDescription, price } = req.body;

    //Optional Data
    const { postalCode, quantity, location, latitude, longitude, url } = req.body

    if (!title || !shortDescription || !fullDescription || !price) {
        res.status(400).json({
            code: 400,
            success: false,
            data: 'Incomplete data',
        })
    }

    try {
        const createdPost = await Post.create({
            title,
            shortDescription,
            fullDescription,
            price,
            postalCode,
            quantity,
            location,
            latitude,
            longitude,
            url,
        })
        res.status(200).json({
            code: 200,
            success: true,
            data: createdPost,
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            success: true,
            data: error,
        })
    }
}

exports.getPost = async function(req, res) {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if(!post) {
            res.status(404).json({
                code: 404,
                success: false,
                message: 'Post not found',
                data: null,
            });
        }
        res.status(200).json({
            code: 200,
            success: true,
            data: post,
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            success: false,
            data: error,
        });
    }
}

exports.deletePost = async function(req, res) {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if(!post) {
            res.status(404).json({
                code: 404,
                success: false,
                message: 'Post not found',
                data: null,
            });
        }
        const deletedPost = await Post.destroy({
            where: {
                id,
            }
        });
        res.status(200).json({
            code: 200,
            success: true,
            message: 'Post deleted',
            data: deletedPost,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500,
            success: false,
            data: error,
        });
    }
}

exports.updatePost = async function(req, res){
    // Required data to create the post
    const { id, title, shortDescription, fullDescription, price, postalCode, quantity, location, latitude, longitude, url } = req.body;

    try {
        const createdPost = await Post.update(
            {
                title,
                shortDescription,
                fullDescription,
                price,
                postalCode,
                quantity,
                location,
                latitude,
                longitude,
                url,
            },
            {
                where: {
                    id,
                }
            }
        )
        res.status(200).json({
            code: 200,
            success: true,
            data: createdPost,
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            success: true,
            data: error,
        })
    }
}