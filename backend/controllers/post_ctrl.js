const Post = require("../models/post_model");
const user = require("../models/user_model");
const fs = require("fs");

// get all posts
exports.allPosts = (req, res) => {
  Post.findAll()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error.stack);
      res.status(400).json({
        error: error.message || error,
      });
    });
};

// create post
exports.createPost = async (req, res) => {
  if (req.file != null) {
    console.log(req.body.post);
    const url = req.protocol + "://" + req.get("host");
    let { userId, title, message } = req.body;
    const post = Post.build({
      userId,
      title,
      message,
      mediaUrl: url + "/images/" + req.file.filename,
      usersRead: [],
    });
    try {
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      console.log(error.stack);
      res.status(400).json({
        error: error.message || error,
      });
    }
  } else {
    const postObject = req.body;
    const post = Post.build({
      userId: postObject.userId,
      mediaUrl: null,
      title: postObject.title,
      message: postObject.message,
      usersRead: [postObject.userId],
    });
    try {
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      console.log(error.stack);
      res.status(400).json({
        error: error.message || error,
      });
    }
  }
};

// get one post
exports.getOne = async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
  });
  try {
    res.status(200).json(post);
  } catch (error) {
    console.log(error.stack);
    res.status(400).json({
      error: error.message || error,
    });
  }
};

// users read array handling
exports.userRead = async (req, res) => {
  const userId = req.body.postUserId;
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!post) {
    res.status(400).json({
      error: "no post found",
    });
  }
  const usersRead = [...post.usersRead];
  if (!usersRead.includes(userId)) {
    usersRead.push(userId);
    await post.update({ usersRead });
    await post.save();
    res.status(200).json({
      success: "post read",
    });
  } else {
    res.status(304).json({
      message: "post already read by user",
    });
  }
};
