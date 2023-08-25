import type { APIRoute } from "astro";
import { removeCommentById } from "../../../../comments";

export const del: APIRoute = async ({ params, request }) => {
  const { id } = params;
  if (!id) {
    return new Response("", { status: 400 });
  }
  await removeCommentById(id);
  return new Response();
};
