import React from "react";
import Image from "next/image";

import FooterList from "./FooterList";

import logo from "/public/logo-2d.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between px-4 lg:px-12 xl:px-24 2xl:px-28 3xl:px-36 py-12 xl:py-20 3xl:py-24 bg-dark-tertiary">
      <div className="space-y-14">
        <div>
          <h2 className="text-7xl 3xl:text-8xl font-bold">Fusion</h2>

          <p className="paragraph font-light max-w-md xl:max-w-lg">
            Zk-based Multi-chain Smart Contract Wallet Powered by Wormhole
          </p>
        </div>

        <FooterList />
      </div>

      <Image
        src={logo}
        alt="Fusion Logo"
        className="3xl:max-w-md w-28 sm:w-44 md:w-60 lg:w-80 2xl:w-96 -order-1 md:order-1"
      />
    </footer>
  );
};

export default Footer;
