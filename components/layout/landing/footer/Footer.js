import React from "react";
import Image from "next/image";

import FooterList from "./FooterList";

import logo from "/public/logo-2d.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-tertiary" aria-label="Footer">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between px-8 lg:px-12 xl:px-0 py-12 xl:py-20 3xl:py-24">
        <section className="space-y-14 mb-0 lg:mb-8 2xl:mb-10 3xl:mb-14 mt-24 sm:mt-0">
          <div>
            <h2 className="text-7xl 3xl:text-8xl font-bold">Fusion</h2>

            <p className="paragraph font-light max-w-md xl:max-w-lg">
              Zk-based Multi-chain Smart Contract Wallet Powered by Wormhole
            </p>
          </div>

          <FooterList />
        </section>

        <div className="relative flex-grow -order-1 md:order-1">
          <Image
            src={logo}
            alt="Fusion Logo"
            className="absolute -top-4 left-0 md:left-auto md:right-0 sm:top-1/2 sm:-translate-y-1/2 w-28 sm:w-44 md:w-80 2xl:w-96 3xl:w-full max-w-md"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
