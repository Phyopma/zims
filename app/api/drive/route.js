import { google } from "googleapis";
import { NextResponse } from "next/server";
import fM from "./fileMappings.json";

async function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });
  return auth;
}

export async function GET(req, { params }) {
  try {
    const auth = await getAuthClient();
    const drive = google.drive({ version: "v3", auth });
    const name = req.nextUrl.searchParams.get("name");
    const fileId = fM[name];

    // handle the file not found
    if (!fileId) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const response = await drive.files.get(
      {
        fileId: fileId,
        alt: "media",
      },
      { responseType: "arraybuffer" },
    );

    const buffer = Buffer.from(response.data);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  }
}
