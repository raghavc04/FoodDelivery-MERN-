import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import Swal from "sweetalert2";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found." });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials." });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

//register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //checking if email already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists." });
    }
    //validating email format & strong password
    if (!validator.isEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Invalid email format.",
      });
      return res.json({ success: false, message: "Invalid email format." });
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
      });
      return res.json({
        success: false,
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol.",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating new user
    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({
      success: true,
      message: "User registered successfully.",
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to register user." }); // handle error here if needed
  }
};

export { loginUser, registerUser };