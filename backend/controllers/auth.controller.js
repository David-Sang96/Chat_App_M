import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../ultis/generateTokenAndSetCookie.js";

export const signUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "Please fill up all fields" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords not match" });
    }

    const isExisted = await User.findOne({ username });
    if (isExisted) {
      return res.status(400).json({ error: "Username already exist" });
    }

    const newUser = await User.create({
      fullName,
      username,
      password,
      gender,
      profilePic:
        gender === "male"
          ? `https://avatar.iran.liara.run/public/boy?username=${gender}`
          : `https://avatar.iran.liara.run/public/girl?username=${gender}`,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signUp controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const LogIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Please fill up all fields" });
    }

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in LogIn controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const LogOut = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in LogOut controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
