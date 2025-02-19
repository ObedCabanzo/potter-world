"use client";
import { trackUserLogout } from "@/analytics/events";
import { resetUser } from "../analytics/amplitude";
import { SessionData } from "@auth0/nextjs-auth0/types";

export default function LogoutButton({ session }: { session: SessionData }) {
  const handleLogout = (e: any) => {
    trackUserLogout(session.user.sub);
    resetUser();
  };

  return (
    <a
      className="bg-white py-2 px-8 rounded-lg text-black font-bold"
      href="/auth/logout"
      onClick={handleLogout}
    >
      Log out
    </a>
  );
}
