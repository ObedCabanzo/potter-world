import { auth0 } from "../../lib/auth0";
import Profile from "./profile";
import { houseService } from "../../lib/api/apiServices";
import {  NextResponse } from "next/server"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};


export default async function Page() {
  const session = await auth0.getSession();
  const houses = await houseService.getAll();
  if (!session) {
    return NextResponse.redirect("auth/login");
  } else {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <Profile session={session} houses={houses}/>
      </div>
    );
  }
}
