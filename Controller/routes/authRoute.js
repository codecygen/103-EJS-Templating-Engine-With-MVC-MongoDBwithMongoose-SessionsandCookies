const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// Express-Session-Keep-Cookie-in-req.session
const populateSelectedUser = require("../middleware/populateSelectedUser");
router.use(populateSelectedUser);

router.get("/login", authController.getLoginPage);
router.post("/login", authController.postLoginPage);

router.post("/logout", authController.postLogout);

module.exports = router;