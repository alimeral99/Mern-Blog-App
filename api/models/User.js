const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, min: 4, required: true, uniqe: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
