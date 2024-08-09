import { Lobster } from "next/font/google";
import Link from "next/link";
import React from "react";

const lobster = Lobster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="mt-40 px-20">
      <div className="flex justify-between">
        <div className="my-auto">
          <h1 style={lobster.style} className="text-2xl">
            Foodieland<span className="font-bold text-[#FF7426]">.</span>
          </h1>
          <p className="mt-4 text-black text-opacity-60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
          </p>
        </div>
        <div className="my-auto">
          <ul className="flex gap-x-[60px] text-black">
            <li className="text-base font-medium">
              <Link href="#">Recipes</Link>
            </li>
            <li className="text-base font-medium">
              <Link href="#">Blog</Link>
            </li>
            <li className="text-base font-medium">
              <Link href="#">Contact</Link>
            </li>
            <li className="text-base font-medium">
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 h-[1px] w-full bg-black bg-opacity-10"></div>
      <div className="py-12">
        <p className="text-center font-medium text-black text-opacity-60">
          &copy;2020 Flowbase. Powered by{" "}
          <span className="text-[#FF7967]">Webflow</span>
        </p>
      </div>
    </footer>
  );
}
