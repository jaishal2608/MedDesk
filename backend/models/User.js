const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["patient", "doctor", "admin"],
      default: "patient",
    },
    phone: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
    googleId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function () {
  const passwordWasChanged = this.isModified("password");

  if (passwordWasChanged === false) {
    return;
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  const plainPassword = this.password;
  const hashedPassword = await bcrypt.hash(plainPassword, salt);

  this.password = hashedPassword;
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  const isSamePassword = await bcrypt.compare(enteredPassword, this.password);
  return isSamePassword;
};
module.exports = mongoose.model("User", userSchema);
