import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
    trim: true, //removes any leading/trailing whitespace
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["Admin", "Project Manager", "Team Member"],
    default: "Team Member",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
