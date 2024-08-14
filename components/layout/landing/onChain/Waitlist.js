import React from "react";

import RippleLink from "@/components/ui/buttons/RippleLink";

const Waitlist = () => {
  return (
    <div className="p-6 md:p-8 lg:p-10 xl:p-14 3xl:p-16 bg-dark-tertiary rounded-3xl flex-1 relative z-10">
      <div className="space-y-4 mb-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
          Join the waitlist
        </h3>

        <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
          Be among the first to experience the future of multichain transactions
          and on-chain banking. Click on Join Waitlist to get early access.
        </p>
      </div>

      <RippleLink
        location="/#"
        border
        color="#D9D9D9"
        rippleColor="rgba(217,217,217,0.2)"
        className="font-semibold capitalize mt-auto block"
      >
        Join Wishlist
      </RippleLink>
    </div>
  );
};

export default Waitlist;
