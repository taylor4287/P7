const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer_config");
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/post_ctrl");

// TODO add auth middleware
router.get("/", postCtrl.allPosts);
// TODO add auth middleware
router.get("/:id", postCtrl.getOne);
// TODO add auth middleware
router.post("/", multer, postCtrl.createPost);

module.exports = router;
