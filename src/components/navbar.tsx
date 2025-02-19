import { linksMap } from "../data/links";
import CustomButton from "./customButton";
import SearchBar from "./searchComponent";
import { auth0 } from "../lib/auth0";

export default async function Navbar() {
  const session = await auth0.getSession();
  return (
    <div className="bg-white flex flex-wrap justify-center sm:justify-between py-4 px-8 sticky top-0 z-50">
      <div className="text-black font-bold flex flex-wrap  justify-center sm:justify-start">
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
      <SearchBar session={session} />
    </div>
  );
}
