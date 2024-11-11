import Image from "next/image";
import React from "react";

export default function Inbox() {
  return (
    <div className="container mx-auto py-20">
      <div className="relative w-full overflow-hidden rounded-3xl bg-light-blue py-10 text-center">
        <div className="content mx-auto w-1/2">
          <h2 className="text-3xl font-bold text-black">
            Deliciousness to your inbox
          </h2>
          <p className="mt-6 text-base text-black text-opacity-60">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
          <div className="mx-auto mt-11 flex w-fit rounded-full bg-white px-6 py-2.5">
            <input
              type="email"
              name="email"
              placeholder="Your email address.."
              className="w-1/4 grow border border-none p-0 placeholder:text-black placeholder:text-opacity-60 focus:outline-none"
            />
            <button className="flex-none rounded-3xl bg-black px-6 py-4 text-center text-white">
              Subscribe
            </button>
          </div>
        </div>
        <Image
          src="/illustrations/salad.png"
          height={103}
          width={6209}
          alt="salad"
          className="absolute bottom-0 left-0 h-auto w-96"
        />
        <Image
          src="/illustrations/soup.png"
          height={103}
          width={6209}
          alt="salad"
          className="absolute bottom-0 right-0 h-auto w-96"
        />
      </div>
    </div>
  );
}
