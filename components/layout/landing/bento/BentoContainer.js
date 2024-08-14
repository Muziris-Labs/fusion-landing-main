import Image from "next/image";
import React from "react";

const BentoContainer = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 gap-2 md:gap-6 mx-4 md:mx-8 max-w-5xl xl:max-w-6xl 3xl:max-w-7xl lg:mx-auto">
      <div className="col-span-4 sm:col-span-8 bg-dark-tertiary rounded-3xl flex flex-col justify-between items-end overflow-hidden">
        <div className="space-y-4 z-10 relative px-6 lg:px-10 xl:px-12 3xl:px-16 mt-6 lg:mt-12 xl:mt-14 3xl:mt-20 self-start">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
            GAS Token
          </h2>

          <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
            Advanced fee estimation across multiple chains, all payable in GAS.
          </p>
        </div>

        <Image
          src="/landing/bento/gas-token.png"
          alt="Privacy Maximized"
          width={800}
          height={800}
        />
      </div>

      <div className="col-span-2 sm:col-span-4 bg-dark-tertiary rounded-3xl flex flex-col justify-between items-end overflow-hidden">
        <Image
          src="/landing/bento/user-friendly.png"
          alt="Privacy Maximized"
          width={400}
          height={400}
        />

        <div className="space-y-4 z-10 relative px-6 lg:px-10 xl:px-12 3xl:px-16 mb-6 lg:mb-12 xl:mb-14 3xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
            Privacy Maximized
          </h2>

          <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
            Track and manage your assets across all supported chains.
          </p>
        </div>
      </div>

      <div className="col-span-2 sm:col-span-4 bg-dark-tertiary rounded-3xl flex flex-col justify-between items-end overflow-hidden">
        <Image
          src="/landing/bento/user-friendly.png"
          alt="Privacy Maximized"
          width={400}
          height={400}
        />

        <div className="space-y-4 z-10 relative px-6 lg:px-10 xl:px-12 3xl:px-16 mb-6 lg:mb-12 xl:mb-14 3xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
            User Friendly
          </h2>

          <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
            Intuitive dashboard for easy portfolio management
          </p>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-8 bg-dark-tertiary p-16 rounded-3xl">
        <div className="space-y-4 z-10 relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
            Multi-chain Freedom
          </h2>

          <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
            Track and manage your assets across all supported chains.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BentoContainer;
