export function GET(request: Request) {
  return Response.json({ hello: "world" });
}
export async function POST(request: Request) {
  const body = await request.arrayBuffer();
  const decoder = new TextDecoder("utf-8");
  const text = decoder.decode(body);
  console.log(text);

  const boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW";
  const multipartBody = `
--${boundary}
Content-Disposition: form-data; name="field1"

${text}
--${boundary}--
`;

  return new Response(multipartBody, {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
    },
  });
}
