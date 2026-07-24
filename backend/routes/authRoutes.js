const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  verifyOtp,
  googleLogin,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-otp", verifyOtp);
router.post("/google", googleLogin);

// Temporary test route to confirm middleware works
router.get("/test-protected", protect, (req, res) => {
  res.status(200).json({
    message: "You accessed a protected route!",
    user: req.user,
  });
});

module.exports = router;
