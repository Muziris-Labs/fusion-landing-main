import React from "react";
import BentoContainer from "./BentoContainer";
import BentoHeading from "./BentoHeading";

const Bento = () => {
  return (
    <section className="space-y-20 my-16">
      <BentoHeading />

      <BentoContainer />
    </section>
  );
};

export default Bento;
