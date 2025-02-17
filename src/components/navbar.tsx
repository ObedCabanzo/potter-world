import { linksMap } from "../data/links";
import CustomButton from "./customButton";

export default function Navbar() {
  return (
    <div className="bg-white text-black font-bold flex py-4 px-8">
      {Object.keys(linksMap).map((key) => (
        <CustomButton
          key={key}
          url={linksMap[key].url}
          text={linksMap[key].text}
          trackText={`btn-navbar-${linksMap[key].text}`}
          className={"bg-white text-black font-bold flex gap-8 py-2 px-2"}
        />
      ))}
    </div>
  );
}
