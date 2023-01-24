const Post = require('../models/post_model');
const user = require('../models/user_model');
const fs = require('fs');

// get all posts
exports.allPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
          res.status(200).json(posts);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
    );
};

// create post
exports.createPost = (req, res, next) => {
    req.body.post = JSON.parse(req.body.post);

    const sauce = new Sauce({
        userName: req.body.userName,
        images: url + '/images/' + req.file.filename,
        date: req.body.date,
        title: req.body.post.title,
        message: req.body.message,
        usersRead: req.body.post.usersRead
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
    let post = new Post({ _id: req.params._id });
    Post.findOne({ _id: req.params._id }).then(
      (post) => {
        if (req.file) {
          const url = req.protocol + '://' + req.get('host');
          req.body.post = JSON.parse(req.body.post);
          post = {
            id: req.params.id,
            userName: req.body.post.userName,
            images: url + '/images/' + req.file.filename,
            date: req.body.post.date,
            title: req.body.post.title,
            message: req.body.post.message,
            usersRead: req.body.post.usersRead
          };
        } else {
          post = {
            id: req.params.id,
            userName: req.body.userName,
            images: req.body.images,
            date: req.body.date,
            title: req.body.title,
            message: req.body.message,
            usersRead: req.body.usersRead
          };
        }
        Post.updateOne({_id: req.params.id}, post).then(
          () => {
            res.status(201).json({
              message: 'Post updated successfully!'
            });
          }
        ).catch(
          (error) => {
            console.log(error);
            res.status(400).json({
              error: error
            });
          }
        );
      }
    )
};

// delete post
exports.deletePost = (req, res, next) => {
    Post.findOne({_id: req.params.id}).then(
        (post) => {
          const filename = sauce.imageUrl.split('/images/')[1];
          fs.unlink('images/' + filename, () => {
            Post.deleteOne({_id: req.params.id}).then(
              () => {
                res.status(200).json({
                  message: 'Deleted!'
                });
              }
            ).catch(
              (error) => {
                res.status(400).json({
                  error: error
                });
              }
            );
          });
        }
      );
};