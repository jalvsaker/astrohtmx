import { createClient } from "@libsql/client";

const client = createClient({
  url: import.meta.env.DB_URL,
  authToken: import.meta.env.DB_TOKEN,
});

export interface Comment {
  id?: string;
  author: string;
  text: string;
  date: Date;
}

export async function removeCommentById(id: string) {
  const rs = await client.execute({
    sql: "delete from comments where rowid = :id",
    args: {
      id,
    },
  });

  if (rs.rowsAffected < 1) {
    throw new Error();
  }
}

export async function addComment(comment: Comment) {
  console.log(comment.date.toISOString());
  const rs = await client.execute({
    sql: "insert into comments values (:name, :text, :date);",
    args: {
      name: comment.author,
      text: comment.text,
      date: comment.date.toISOString(),
    },
  });
  comment.id = rs.lastInsertRowid?.toString();
}

export async function getAllComments(): Promise<Comment[]> {
  const rs = await client.execute(
    "select rowid, name, comment, date from comments;",
  );

  const result = rs.rows.map((row) => {
    return {
      id: row.rowid?.toString(),
      author: String(row.name),
      text: String(row.comment),
      date: new Date(String(row.date)),
    };
  });
  return result;
}
