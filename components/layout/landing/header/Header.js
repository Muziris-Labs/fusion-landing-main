import React from "react";

import Logo from "@/components/ui/Logo";
import RippleLink from "@/components/ui/buttons/RippleLink";

import "./Header.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-4 sm:p-8 2xl:h-screen max-w-screen-2xl 2xl:m-auto 2xl:py-8">
      <div className="h-full p-8 md:p-10 lg:p-12 xl:p-16 3xl:p-20 space-y-32 lg:space-y-48 3xl:space-y-64 bg-dark-tertiary header rounded-3xl 2xl:flex 2xl:flex-col 2xl:justify-between">
        <Logo />

        <section className="md:space-y-8">
          <div className="block w-full md:hidden">
            <Image
              src="/landing/header/fusion-hero.png"
              width={600}
              height={600}
              alt="Hero Image"
              className="-translate-y-20 mx-auto"
            />
          </div>

          <div className="space-y-2 -translate-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl  font-bold">
              ZK-Powered <br /> Fortress
            </h1>

            <p className="paragraph max-w-sm lg:max-w-lg 2xl:max-w-xl">
              Deploy your zk-powered multi-chain smart wallet powered by
              Wormhole
            </p>
          </div>

          <div className="flex space-x-4">
            <RippleLink
              location="/#"
              color="#000"
              className="bg-[#D9D9D9] font-semibold capitalize"
            >
              Launch App
            </RippleLink>

            <RippleLink
              location="/#"
              border
              color="#D9D9D9"
              rippleColor="rgba(217,217,217,0.2)"
              className="font-semibold capitalize"
            >
              Join Wishlist
            </RippleLink>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
