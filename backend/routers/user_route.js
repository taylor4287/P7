const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userCtrl = require("../controllers/user_ctrl");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/", userCtrl.findAll);
router.get("/:id", auth, userCtrl.findOne);
router.delete("/:id", auth, userCtrl.deleteUser);

module.exports = router;
