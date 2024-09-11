import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    gender: { type: String, required: true, enum: ["male", "female"] },
    profilePic: { type: String, default: "" },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.pre(/^find/, function (next) {
  this.select("-__v");
  next();
});

const User = mongoose.model("Person", userSchema);

export default User;
