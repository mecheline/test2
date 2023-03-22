import { model, models, Schema } from "mongoose";
// import normalize from "normalize-mongoose";

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
});

// userSchema.plugin(normalize);

export default models.User || model("User", userSchema);
