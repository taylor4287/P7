const post = require('../models/post_model');
const user = require('../models/user_model');
const fs = require('fs');
const { runInNewContext } = require('vm');

// get all posts
exports.allPosts = (req, res, next) => {

};

// create post
exports.createPost = (req, res, next) => {
    req.body.post = JSON.parse(req.body.post);

    const sauce = new Sauce({
        authorUsername: req.body.authorUsername,
        date: req.body.date,
        message: req.body.message,
        media: req.body.media,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDislikes: [],
        comments: req.body.comments
    });
    post.save().then(
        () => {
            res.status(201).json({
                message: 'Sauce saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

// get one post
exports.getOne = (req, res, next) => {
    post.findOne({ id: req.params.id }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

// modify post
exports.modifyPost = (req, res, next) => {
//     let post = new Post ({ id: req.params.id });

//     Post.findOne({ id: req.params.id }).then(
//         (post) => {
//             if
//         }
//     )
};

// delete post
exports.deletePost = (req, res, next) => {

};