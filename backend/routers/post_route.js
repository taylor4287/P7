const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer_config');
const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post_ctrl');

router.get('/', postCtrl.allPosts);
router.get('/', postCtrl.getOne);
router.post('/', multer, postCtrl.createPost);
router.put('/', multer, postCtrl.modifyPost);
router.delete('/', postCtrl.deletePost);

module.exports = router;