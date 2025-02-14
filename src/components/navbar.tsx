import { links } from "../data/links.js";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white text-black font-bold flex gap-8 py-4 px-8">
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.text}
          </Link>
        ))}
      </div>
  );
}
