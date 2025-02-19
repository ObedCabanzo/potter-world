"use client"
import { House } from ".././models/house";
import { socialMedia } from "../utils/utils";
import { trackFollow } from "../analytics/events";
import { SessionData } from "@auth0/nextjs-auth0/types";

export default function HouseCard({session, house }: {session: SessionData | null , house: House }) {
  const handleClick = (social: string) => {
    trackFollow(session, social);
  };
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-semibold text-center"> {house.house}</h2>
        <p>Animal: {house.animal}</p>
        <p className="text-5xl text-center">{house.emoji}</p>
        <p>Founder: {house.founder}</p>

        {house.colors.length > 0 && (
          <>
            <h2 className="text-lg font-semibold text-center"> Colors</h2>
            <div className="flex flex-col items-center bg-slate-400 rounded-lg p-2">
              {house.colors.map((color) => (
                <p key={`color-${color}`} style={{ color: color }}>
                  {color}
                </p>
              ))}
            </div>
          </>
        )}
        <div className="py-4 flex flex-col gap-2">
          {Object.keys(socialMedia).map((key) => (
            <a
              key={`social-${key}`}
              href={socialMedia[key].url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white text-center bg-black rounded-lg py-2 px-4"
              onClick={() => handleClick(socialMedia[key].text)}
            >
              {socialMedia[key].text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
