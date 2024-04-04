import { defineTable, column } from "astro:db";

// Referenced from https://github.com/ElianCodes/lucia-astrodb/blob/main/db/tables.ts

export const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text(),
    githubId: column.text({ unique: true }),
  },
});
export const Sessions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.text({ references: () => Users.columns.id }),
    expiresAt: column.number(),
  },
});

export const Comments = defineTable({
  columns: {
    userId: column.text({ references: () => Users.columns.id }),
    content: column.text(),
  },
});
