import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="px-52 py-20 lg:py-32 space-y-10 text-center bg-[#252525]">
      <h2 className="text-2xl sm:text-xl 3xl:text-3xl font-medium text-white">
        Partners
      </h2>

      <ul className="flex justify-between mx-4 sm:mx-8 md:mx-16 flex-wrap gap-5 sm:gap-8 min-h-20">
        <li className="flex-1 min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/unblock-logo.svg"
            alt="Unblock Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
          />
        </li>

        <li className="flex-1 min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/frax.svg"
            alt="Unblock Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
            className="mt-1.5"
          />
        </li>

        <li className="flex-1 min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/keycard-logo.svg"
            alt="Keycard Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
          />
        </li>

        <li className="flex-1 block min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/banklessDAO-logo.svg"
            alt="Bankless Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
            className="mt-4"
          />
        </li>
      </ul>
    </section>
  );
};

export default Partners;
