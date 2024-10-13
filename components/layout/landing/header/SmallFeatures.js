"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

const features = [
  "DECENTRALISED",
  "ZK-POWERED",
  "SMART WALLET",
  "PORTABLE",
  "MULTICHAIN",
  "DECENTRALISED",
  "ZK-POWERED",
  "SMART WALLET",
  "PORTABLE",
  "MULTICHAIN",
  "DECENTRALISED",
  "ZK-POWERED",
  "SMART WALLET",
  "PORTABLE",
  "MULTICHAIN",
];

export default function SmallFeatures() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const animationDuration = 30000;

    const animation = anime({
      targets: scrollRef.current,
      translateX: [-scrollWidth / 2, 0],
      duration: animationDuration,
      easing: "linear",
      loop: true,
    });

    return () => animation.pause();
  }, []);

  return (
    <div className="w-full bg-[#333333] py-2 overflow-hidden">
      <div ref={scrollRef} className="flex whitespace-nowrap">
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="text-white text-xs flex gap-5 items-center mr-5"
          >
            {feature}
            <span>-</span>
          </div>
        ))}
      </div>
    </div>
  );
}
