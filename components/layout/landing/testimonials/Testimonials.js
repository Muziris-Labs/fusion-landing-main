import React from "react";
import Image from "next/image";

import TestimonialList from "./TestimonialList";
import TestimonialHeading from "./TestimonialHeading";

const Testimonials = () => {
  return (
    <section className="py-24 space-y-16 relative">
      <Image
        src="/landing/powered-by/comment-bg.png"
        alt="Testimonials Background"
        layout="fill"
        quality={100}
        priority
        className="object-contain object-left py-14"
      />

      <div>
        <TestimonialHeading />
        <TestimonialList />
      </div>
    </section>
  );
};

export default Testimonials;
