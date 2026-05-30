//params are the unique value that are extracted from the url like "/blog/astro-project" so astro-project is a param
//params means parameter from the url

import { db } from "@/db/client";
import scalekit from "@/lib/scalekit";
import { Scalekit } from "@scalekit-sdk/node";
import { NextRequest, NextResponse } from "next/server";
import { user as User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const error_description = searchParams.get("error_description");

  if (error) {
    return NextResponse.json({ error, error_description }, { status: 401 });
  }
  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const redirectUri = process.env.SCALEKIT_REDIRECT_URI!;

    const authResult = await scalekit.authenticateWithCode(code, redirectUri);

    const { user, idToken } = authResult;

    const claims = await scalekit.validateAccessToken(idToken);
    console.log("CLAIMS:", claims);
    console.log("USER:", user);
    const organization_id =
      (claims as any).organization_id ||
      (claims as any).oid ||
      (claims as any).org_id ||
      "default-org";

    const existing = await db
      .select()
      .from(User)
      .where(eq(User.email, user.email));

    if (existing.length === 0) {
      await db.insert(User).values({
        name: user?.name || "anonymous",
        email: user.email,
        organization_id: organization_id,
      });
    }

    const response = NextResponse.redirect(new URL("/", req.url));

    const userSession = {
      email: user.email,
      organization_id: organization_id,
    };

    response.cookies.set("user_session", JSON.stringify(userSession), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (error) {
    console.log("Error exchanging code:", error);
    return NextResponse.json(
      { error: "Failed to authenticate user" },
      { status: 500 },
    );
  }
}
