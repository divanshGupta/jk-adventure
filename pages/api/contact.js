// /pages/api/saveBooking.js
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  try {
    const { packageName, travellers, specialReq, name, email, phone } = req.body;

    // Authenticate Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append row
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: "Sheet1!A:G", // adjust columns
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-IN"), // Timestamp
          packageName,
          travellers,
          specialReq,
          name,
          email,
          phone
        ]]
      },
    });

    res.status(200).json({ message: "Booking saved!" });
  } catch (err) {
    console.error("Error saving booking:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
