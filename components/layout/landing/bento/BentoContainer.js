"use client";

import Image from "next/image";
import React, { useRef } from "react";
import anime from "animejs";
import { useGSAP } from "@gsap/react";
import MultiChain from "./MultiChain";

const BentoContainer = () => {
  const particleContainer = useRef(null);

  useGSAP(() => {
    if (!particleContainer.current) return;

    var numberOfEls = 100;
    var duration = 2000;
    var midScreenX = particleContainer.current.offsetWidth / 2;
    var midScreenY = particleContainer.current.offsetHeight / 2;
    var radius = Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);

    for (var i = 0; i < numberOfEls; i++) {
      var angle = Math.random() * Math.PI * 2;
      var el = particleContainer.current.ownerDocument.createElement("div");
      el.classList.add("particule");
      el.style.width = "1px";
      el.style.height = "1px";
      anime({
        targets: el,
        width: ["1px", "10px"],
        height: ["1px", "10px"],
        left: [midScreenX + "px", Math.cos(angle) * radius + midScreenX + "px"],
        top: [midScreenY + "px", Math.sin(angle) * radius + midScreenY + "px"],
        delay: (duration / numberOfEls) * i,
        duration: duration,
        easing: "easeInExpo",
        loop: true,
      });
      particleContainer.current.appendChild(el);
    }
  }, [particleContainer]);

  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 gap-2 md:gap-6 mx-4 md:mx-8 max-w-5xl xl:max-w-6xl 3xl:max-w-7xl lg:mx-auto">
      <div
        className="col-span-4 sm:col-span-8 bg-dark-tertiary rounded-3xl flex flex-col justify-between items-end overflow-hidden relative"
        ref={particleContainer}
      >
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
          className="z-10"
        />
      </div>

      <div className="relative col-span-2 sm:col-span-4 bg-dark-tertiary rounded-3xl flex flex-col justify-between overflow-hidden">
        <Image
          src="/landing/bento/wormhole_grid.png"
          alt="Privacy Maximized"
          fill
          style={{
            objectFit: "cover",
          }}
          className="opacity-40"
        />

        <Image
          src="/landing/bento/wormhole-logo.svg"
          alt="Privacy Maximized"
          width={150}
          height={150}
          className="mt-10 xl:ml-10 xl:scale-100 ml-0 scale-75"
        />

        <div className="space-y-4 z-10 relative px-6 lg:px-10 xl:px-12 3xl:px-16 mb-6 lg:mb-12 xl:mb-14 3xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl font-bold">
            Privacy Maximized
          </h2>

          <p className="text-base md:text-lg xl:text-xl 3xl:text-2xl">
            Secure your multi-chain domain trustlessly with Wormhole
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
      <MultiChain />
    </div>
  );
};

export default BentoContainer;
