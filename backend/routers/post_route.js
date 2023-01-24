const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post_ctrl');

router.get('/', postCtrl.allPosts);
router.get('/', postCtrl.getOne);
router.post('/', postCtrl.createPost);
router.put('/', postCtrl.modifyPost);
router.delete('/', postCtrl.deletePost);

module.exports = router;