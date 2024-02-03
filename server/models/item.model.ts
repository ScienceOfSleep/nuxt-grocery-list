import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  itemName: String,
  isChecked: Boolean,
});

export const Item = model("Item", ItemSchema);