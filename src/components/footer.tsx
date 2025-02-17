import { auth0 } from "../lib/auth0";

export default async function Footer() {
  // Login, sign up, and logout buttons
  const session = await auth0.getSession();


  if (!session) {
    return (
      <div className="flex w-full items-center justify-center fixed bottom-0 bg-black text-white p-4 gap-4">
        <a className="bg-white py-2 px-8 rounded-lg text-black font-bold" href="/auth/login">Log in</a>
        <a className="bg-white py-2 px-8 rounded-lg text-black font-bold" href="/auth/login?screen_hint=signup">Sign up</a>
      </div>
    );
  }

  return (
    <div className="flex w-full items-center justify-center fixed bottom-0 bg-black text-white p-4 gap-4">
        <p className="text-white font-semibold">Welcome, {session.user.nickname} !!!</p>
      <a className="bg-white py-2 px-8 rounded-lg text-black font-bold" href="/auth/logout">Log out</a>
    </div>
  );
}
