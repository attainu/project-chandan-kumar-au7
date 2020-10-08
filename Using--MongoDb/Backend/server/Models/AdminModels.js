import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;
const schema = new Schema({
  // sign in database
  username: { type: String, required: true },
  secret: { type: String, required: true },
  status: { type: String, default: "pending" },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model("adminmodel", schema); //accessing a model
