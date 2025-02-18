"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function FooterNew() {
  return (
    <div className="2xl:px-52 xl:px-20 px-5 sm:px-10  relative bg-[#f3f3f3] w-full flex flex-col items-center justify-center py-10 pb-0 gap-10 ">
      <div className="flex items-center justify-between w-full gap-10 md:flex-row flex-col">
        <div className="flex items-center gap-1 md:flex-row flex-col">
          {" "}
          <Image
            src="/FusionLogo.svg"
            width={50}
            height={50}
            alt="Fusion Logo"
          />
          <h1 className="text-2xl font-semibold">Fusion</h1>
        </div>
        <div className="flex items-center gap-5 font-light md:flex-row flex-col z-10">
          <p>Making Crypto Clear and Simple</p>
          <RippleLink
            location="https://app.getfusion.tech"
            color="#fff"
            className="bg-black/80 font-light text-sm px-12 py-3"
          >
            Launch App
          </RippleLink>
        </div>
      </div>

      <div className="w-full border border-black/20"></div>

      <div className="w-full flex items-center justify-center gap-5 z-50">
        <Image
          src="/landing/footer/github.png"
          width={20}
          height={20}
          alt="github"
          className="hover:cursor-pointer"
          onClick={() => {
            window.open("https://github.com/Muziris-Labs", "_blank");
          }}
        />
        <Image
          src="/landing/footer/twitter.png"
          width={20}
          height={20}
          alt="twitter"
          className="hover:cursor-pointer"
          onClick={() => {
            window.open("https://x.com/fusionwallet", "_blank");
          }}
        />
        <Image
          src="/landing/footer/discord.png"
          width={20}
          height={20}
          alt="discord"
          className="hover:cursor-pointer"
          onClick={() => {
            window.open("https://discord.gg/H2rG8nddeD", "_blank");
          }}
        />
      </div>
      <div className="w-full bg-[#f3f3f3] lg:h-[230px] overflow-hidden relative">
        <Image
          src="/Fusion3dRender.png"
          width={700}
          height={50}
          alt="Fusion 3D Render"
          className="absolute bg-[#f3f3f3] -translate-x-1/2 left-1/2"
        />
      </div>

      <BackgroundBeams className="opacity-50" />
    </div>
  );
}
