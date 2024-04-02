import { db, Author, Comment } from "astro:db";

export default async function seed() {
  // Seed local development data.
  // See https://docs.astro.build/en/guides/astro-db/#seed-your-database

  await db.insert(Author).values([
    { id: 1, name: "Alexander Grattan" },
    { id: 2, name: "John Doe" },
  ]);

  await db.insert(Comment).values([
    { authorId: 1, content: "Hope you like Astro DB!" },
    { authorId: 2, content: "Enjoy!" },
  ]);
}
