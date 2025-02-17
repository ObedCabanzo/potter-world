"use client";
import { trackButtonClick } from "../analytics/events";
import Link from "next/link";

export default function HouseCardButton({
  url,
  text,
  trackText,
  className,
  fn,
}: {
  url: string;
  text: string;
  trackText?: string;
  className?: string;
  fn?: () => void;
}) {
  const handleClick = () => {
    fn ? fn() : null;
    //trackText ? trackButtonClick(trackText) : null;
  };
  return (
    <Link
      className={
        className
          ? className
          : "bg-white text-black font-bold flex gap-8 py-4 px-8"
      }
      href={url}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
}
