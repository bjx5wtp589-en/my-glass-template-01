export const runtime = "edge";

export async function GET() {
  return Response.json({
    status: "ok",
    msg: "API接口已经成功部署！"
  });
}
