import { defineDb } from "astro:db";
import { Sessions, Users, Comments } from "./tables";

// https://astro.build/db/config
export default defineDb({
  tables: { Users, Sessions, Comments },
});
