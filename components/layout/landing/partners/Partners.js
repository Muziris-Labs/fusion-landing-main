import React from "react";

const Partners = () => {
  return (
    <section className="my-24 space-y-10 text-center">
      <h2 className="text-2xl sm:text-xl 3xl:text-3xl font-medium">Partners</h2>

      <ul className="flex justify-between mx-8 md:mx-16 lg:mx-32 flex-wrap gap-12 sm:gap-8">
        <li className="text-4xl sm:text-3xl lg:text-4xl 3xl:text-6xl font-bold flex-1 min-w-40">
          Unblock
        </li>

        <li className="text-4xl sm:text-3xl lg:text-4xl 3xl:text-6xl font-bold flex-1 min-w-40">
          Keycard
        </li>

        <li className="text-4xl sm:text-3xl lg:text-4xl 3xl:text-6xl font-bold flex-1 min-w-40">
          BanklessDAO
        </li>
      </ul>
    </section>
  );
};

export default Partners;
