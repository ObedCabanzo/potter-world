import {links } from "../data/links";
import CustomButton from "../components/customButton";
import { trackPageView } from "@/analytics/events";
export default function Home() {
  trackPageView("home");
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">
        Welcome to Potter's World
      </h1>
      <div className="flex flex-col gap-2 py-8">
      {
        links.map((link) => ( 
          link.id !== "home" && 
          <CustomButton
            key={link.id}
            url={link.url}
            text={link.text}
            trackText={`btn-home-${link.id}`}
            className={"bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800"}
          />
          
        ))
        
      }
      </div>

    </div>
  );
}
