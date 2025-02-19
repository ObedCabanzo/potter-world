"use client"
import { useState } from "react";
import { trackSearch } from "../analytics/events";
import { SessionData } from "@auth0/nextjs-auth0/types";

export default function SearchBar({session}: {session: SessionData | null}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackSearch(session,query.trim());
      setQuery("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-wrap sm:flex-nowrap gap-2 w-full sm:w-fit "
    >
      <input
        type="text"
        placeholder="Search for houses, books, characters..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 outline-none px-4 py-2 w-96 border-2 border-black rounded-lg"
      />
      <button type="submit" className="px-8 py-2 bg-black text-white rounded-lg">Search</button>
    </form>
  );
}
