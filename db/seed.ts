import { generateId } from "lucia";
import { Comments, Users, db } from "astro:db";

export default async function seed() {
  // Seed local development data.
  // See https://docs.astro.build/en/guides/astro-db/#seed-your-database

  const userId = generateId(15);

  await db
    .insert(Users)
    .values([{ id: userId, username: "agrattan0820", githubId: "51346343.0" }]);

  await db.insert(Comments).values([{ userId: userId, content: "Hey there" }]);
}
