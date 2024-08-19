"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import anime from "animejs";

export default function MultiChain() {
  const container = useRef(null);

  useGSAP(() => {
    anime({
      targets: [".circle-1"],
      translateY: -24,
      translateX: 52,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });

    anime({
      targets: [".circle-2"],
      translateY: 24,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });

    anime({
      targets: [".circle-3"],
      translateY: -24,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });

    anime({
      targets: [".circle-4"],
      translateY: 24,
      translateX: -52,
      direction: "alternate",
      loop: true,
      elasticity: 400,
      easing: "easeInOutElastic",
      duration: 1600,
      delay: 800,
    });
  }, [container]);

  return (
    <div
      className="col-span-4 sm:col-span-8 bg-dark-tertiary rounded-3xl flex flex-col justify-between items-end overflow-hidden relative"
      ref={container}
    >
      <div className="space-y-4 z-10 relative px-6 lg:px-10 xl:px-12 3xl:px-16 mt-6 lg:mt-12 xl:mt-14 3xl:mt-20 self-start">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
          Multi-chain Freedom
        </h2>

        <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
          Track and manage your assets across all supported chains.
        </p>
      </div>

      <div className="h-28 sm:hidden"></div>

      <div className=" w-full h-full">
        <div className="loader flex p-5 items-center justify-center h-full w-full">
          <div className="circle rounded-full circle-1"></div>
          <div className="circle rounded-full circle-2"></div>
          <div className="circle rounded-full circle-3"></div>
          <div className="circle rounded-full circle-4"></div>
        </div>
      </div>
    </div>
  );
}
