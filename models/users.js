import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    title: String,
    address: String,
    postcode: String,
    image: String,
    telephone: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
