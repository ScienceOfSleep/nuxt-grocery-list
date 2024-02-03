import { Item } from "~/server/models/item.model";

export default defineEventHandler(async (event) => {
  const Items = await Item.find();

  return Items;
});