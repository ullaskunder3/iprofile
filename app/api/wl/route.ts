import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Send email to ullaskunder3+wl@gmail.com
    await fetch("https://formsubmit.co/ajax/ullaskunder3+wl@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        _subject: `🎉 New Kiroku Waitlist Sign-Up: ${email}`,
        message: `A new user subscribed to the Kiroku Waitlist:\n\nEmail: ${email}\nTime: ${new Date().toISOString()}`,
        _template: "table"
      })
    });

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  }
}
