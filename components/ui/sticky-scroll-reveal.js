import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useConfetti } from "@/lib/fireConfetti";

const StickyScrollSection = () => {
  const containerRef = useRef(null);
  const { fireMultiple } = useConfetti();
  const confettiTriggeredRef = useRef(false);
  const previousScrollRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 75%"], // Changed offset to trigger at center
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Check if we're scrolling down
      const isScrollingDown = value > previousScrollRef.current;
      previousScrollRef.current = value;

      // Trigger confetti when reaching the end (value close to 1) while scrolling down
      if (value > 0.95 && !confettiTriggeredRef.current && isScrollingDown) {
        fireMultiple();
        confettiTriggeredRef.current = true;
      } else if (value < 0.9) {
        // Reset the trigger when scrolling away from the end
        confettiTriggeredRef.current = false;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, fireMultiple]);

  const items = [
    {
      title: "Estimate Gas Fees",
      description:
        "Gas Operators can estimate the gas fees for your transactions and give you the best quote on your desired token.",
      image: "fire.png",
    },
    {
      title: "Generate ZK Proof",
      description:
        "Encode your transactions including the gas quote into a ZK proof and send it to the network for validation.",
      image: "key.png",
    },
    {
      title: "Send Transaction",
      description:
        "Once the ZK proof is validated, the transaction is sent to the network and the gas fees are paid with the desired token.",
      image: "send.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div ref={containerRef} className="relative min-h-screen">
        <div className="2xl:px-52 xl:px-20 px-5 sm:px-10 mx-auto">
          <div className="flex lg:flex-row flex-col 2xl:gap-20">
            {/* Sticky section */}
            <div className="lg:sticky top-[250px] lg:h-[520px]">
              <div className="rounded-lg p-8 pl-0 h-full flex flex-col">
                <h2 className="text-4xl font-bold mb-6">How it works</h2>
                <p className="text-gray-600 text-2xl">
                  zk-powered wallet that allows you to send and receive
                  transactions privately with minimal fees paid with any token.
                </p>
              </div>
            </div>
            {/* Scrolling section */}
            <div className="py-32 pt-0">
              {items.map((item, index) => {
                const padding = -0.3; // Padding to delay the start
                const itemStart = padding + index / items.length;
                const itemEnd = padding + (index + 1) / items.length;
                const opacity = useTransform(
                  scrollYProgress,
                  [itemStart, itemEnd],
                  [0, 1]
                );
                return (
                  <motion.div
                    key={index}
                    style={{ opacity }}
                    className="rounded-lg py-8 lg:pl-16"
                  >
                    <div className="flex flex-col gap-y-4 bg-white shadow-sm p-7 rounded-3xl">
                      <div className="my-2 h-32 w-32 bg-gray-50 rounded-xl flex items-center justify-center">
                        <Image
                          src={"/landing/works/" + item.image}
                          width={100}
                          height={100}
                          alt={item.title}
                        />
                      </div>
                      <h3 className="text-3xl font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollSection;
