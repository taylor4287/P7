const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer_config");
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/post_ctrl");

// TODO add auth middleware
router.get("/", auth, postCtrl.allPosts);
// TODO add auth middleware
router.get("/:id", auth, postCtrl.getOne);
// TODO add auth middleware
router.post("/", auth, multer, postCtrl.createPost);
router.put("/:id", postCtrl.userRead)

module.exports = router;
