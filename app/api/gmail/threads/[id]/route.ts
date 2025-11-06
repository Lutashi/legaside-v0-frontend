export async function GET(_req: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ error: "Not implemented", id: params.id }), {
    status: 501,
    headers: { "content-type": "application/json" },
  })
}


