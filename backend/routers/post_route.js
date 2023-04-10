const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer_config");
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/post_ctrl");

router.get("/", auth, postCtrl.allPosts);
router.get("/:id", auth, postCtrl.getOne);
router.post("/", auth, multer, postCtrl.createPost);
router.put("/:id", auth, postCtrl.userRead)

module.exports = router;
