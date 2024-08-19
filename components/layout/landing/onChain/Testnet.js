import React from "react";

import RippleLink from "@/components/ui/buttons/RippleLink";

const Testnet = () => {
  return (
    <div className="p-6 md:p-8 lg:p-10 xl:p-14 3xl:p-16 bg-dark-tertiary rounded-3xl flex-1">
      <div className="space-y-4 mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
          Testnet is Live
        </h3>

        <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
          Experience the future of multichain transactions and on-chain banking
          today. Our testnet is now open for early adopters and developers.
        </p>
      </div>

      <RippleLink
        location="https://app.getfusion.tech"
        color="#000"
        className="bg-[#D9D9D9] font-semibold capitalize block"
      >
        Launch App
      </RippleLink>
    </div>
  );
};

export default Testnet;
