import React from "react";

import Testnet from "./Testnet";
import Waitlist from "./Waitlist";
import OnChainHeading from "./OnChainHeading";
import Image from "next/image";

const OnChain = () => {
  return (
    <section className="py-28 space-y-20 px-4 pd:px-10 lg:px-16 xl:px-20 3xl:px-28 relative">
      <Image
        src="/landing/on-chain/bank.png"
        alt=""
        width={1000}
        height={1000}
        objectFit="contain"
        objectPosition="center"
        className="absolute top-0 right-0 z-0"
      />

      <OnChainHeading />

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-12">
        <Testnet />

        <Waitlist />
      </div>
    </section>
  );
};

export default OnChain;
