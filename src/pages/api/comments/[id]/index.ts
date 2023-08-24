import type { APIRoute } from "astro";
import { removeCommentById } from "../../../../comments";

export const del: APIRoute = ({ params, request }) => {
  const { id } = params;
  if (!id) {
    return new Response("", { status: 400 });
  }
  removeCommentById(id);
  return new Response();
};
