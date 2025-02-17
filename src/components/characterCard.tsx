import { Character } from "../models/character";
import Image from "next/image";

export default function HouseCard({ character }: { character: Character }) {
  console.log(character);
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-xl font-semibold text-center">
          {character.fullName}{" "}
        </h2>
        <p>Role: {character.nickname}</p>
        <p>House: {character.hogwartsHouse}</p>
        <p className="mb-2">Interpreted by: {character.interpretedBy}</p>
        <Image
          src={character.image}
          alt={character.fullName}
          width={200}
          height={200}
        />
        {character.children.length > 0 && (
          <>
            <h2 className="text-lg mt-2 font-semibold text-center">Children</h2>
            <div className="flex flex-col justify-center items-center ">
              {character.children.map((child) => (
                <p key={`child-${child}`}>{child}</p>
              ))}
            </div>
          </>
        )}
        <p>Birthdate: {character.birthdate}</p>
      </div>
    </div>
  );
}
