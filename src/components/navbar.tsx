import { links } from "../data/links.js";
import CustomButton from "./customButton"

export default function Navbar() {
  return (
    <div className="bg-white text-black font-bold flex gap-8 py-4 px-8">
      {links.map((link) => (
        <CustomButton
        key={link.id}
          url={link.url}
          text={link.text}
          trackText={`btn-navbar-${link.text}`}
          className={"bg-white text-black font-bold flex gap-8 py-2 px-4"}
        />
      ))}
    </div>
  );
}
