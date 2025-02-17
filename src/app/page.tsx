import {linksMap} from "../data/links";
import CustomButton from "../components/customButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Potter's World
      </h1>
      <div className="flex flex-col gap-2 py-8">
      {
        Object.keys(linksMap).map((key) => ( 
          key !== "home" && 
          <CustomButton
            key={key}
            url={linksMap[key].url}
            text={linksMap[key].text}
            trackText={`btn-home-${key}`}
            className={"bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 text-center"}
          />
          
        ))
        
      }
      </div>

    </div>
  );
}
