import { google } from "googleapis";
import { NextResponse } from "next/server";

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_JSON as string),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

async function addEmailToSheet(email: string) {
  if (!process.env.SHEET_ID) {
    throw new Error("SHEET_ID is not defined in environment variables.");
  }

  const sheets = await getSheetsClient();
  const spreadsheetId = process.env.SHEET_ID;

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:A",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [[email]] },
  });

  return { success: true };
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email)
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 },
      );

    await addEmailToSheet(email);
    return NextResponse.json(
      { message: "Email added successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error adding email:", error);
    return NextResponse.json(
      { message: "Failed to add email" },
      { status: 500 },
    );
  }
}
