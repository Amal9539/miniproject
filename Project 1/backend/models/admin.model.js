import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fullname: {
    type: String
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export const Admin = mongoose.model("admin", adminSchema)
