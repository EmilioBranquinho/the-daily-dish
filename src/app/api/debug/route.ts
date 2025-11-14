export async function GET() {
  return Response.json({
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? "OK" : "MISSING",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? "OK" : "MISSING",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "OK" : "MISSING",
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ? "OK" : "MISSING",
  });
}
