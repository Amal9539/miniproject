import { Admin } from "../models/admin.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const adminSignup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    };

    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({
        message: 'User already exist with this email.',
        success: false,
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true
    });
  } catch (error) {
    console.log(error);
  }
}
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    };
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      })
    }
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      })
    };


    const tokenData = {
      adminId: admin._id
    }
    const token = await jwt.sign(tokenData, "randomshit", { expiresIn: '1d' });

    admin = {
      _id: admin._id,
      fullname: admin.fullname,
      email: admin.email,
    }

    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
      message: `Welcome back ${admin.fullname}`,
      admin,
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}
export const adminLogout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}

