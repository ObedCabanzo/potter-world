"use client"
import { useState } from "react";
import { trackSearch } from "../analytics/events";
import { set } from "lodash";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      trackSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 w-fit "
    >
      <input
        type="text"
        placeholder="Buscar casas, personajes, libros..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 outline-none px-4 py-2 w-96 border-2 border-black rounded-lg"
      />
      <button type="submit" className="px-8 py-2 bg-black text-white rounded-lg">Search</button>
    </form>
  );
}
