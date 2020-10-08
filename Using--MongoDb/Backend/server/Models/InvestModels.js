import { Schema as _Schema, model } from "mongoose";

const schema = new Schema({
  username: { type: Schema.Types.ObjectId, ref: "usermodel" },
});

export default model("investmodel", schema); //accessing a model
