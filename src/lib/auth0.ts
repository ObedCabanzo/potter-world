import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { NextResponse } from "next/server";
import { trackUserLogin, trackUserSignup } from "../analytics/events";

export const auth0 = new Auth0Client({
  async onCallback(error, context, session) {
    if (error) {
      return NextResponse.redirect(
        new URL(`/error?error=${error.message}`, process.env.APP_BASE_URL)
      );
    }

    if (session) {
      const is_new = new Date(session.user["http://potter_app/is_new"]);
      if(!is_new) {
        trackUserLogin(session, session.user.sub);
      } 
      else {
        trackUserSignup(session, session.user.sub);
        console.log("new user")
      }
    }

    return NextResponse.redirect(
      new URL(context.returnTo || "/", process.env.APP_BASE_URL)
    );
  }
});

