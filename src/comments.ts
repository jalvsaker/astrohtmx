export interface Comment {
  id?: string;
  author: string;
  text: string;
  date: Date;
}

let comments: Comment[] = [];

export function removeCommentById(id: string) {
  comments = comments.filter((comment) => comment.id !== id);
}

export function addComment(comment: Comment) {
  comment.id = comments.push(comment).toString();
}

export function getAllComments(): Comment[] {
  return comments;
}
