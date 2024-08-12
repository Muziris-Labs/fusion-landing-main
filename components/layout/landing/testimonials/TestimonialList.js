import React from "react";

import TestimonialItem from "./TestimonialItem";

const testimonials = [
  {
    id: 1,
    name: "Baer",
    company: "DAOplomats",
    desc: "As a DeFi enthusiast, I've tried dozens of wallets. Fusion Wallet is a game-changer. One interface for all my chains, and I never worry about privacy. It's like they read my mind!",
  },
];

const TestimonialList = () => {
  return (
    <article className="z-10 relative">
      <ul>
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} {...testimonial} />
        ))}
      </ul>
    </article>
  );
};

export default TestimonialList;
