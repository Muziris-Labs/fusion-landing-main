import React from "react";

const TestimonialItem = ({ name, company, desc }) => {
  return (
    <li className="text-center space-y-4 mx-8 lg:mx-auto lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl">
      <p className="paragraph font-light">"{desc}"</p>

      <div className="flex gap-2 paragraph font-medium justify-center">
        <h3>{name},</h3>

        <h4>{company}</h4>
      </div>
    </li>
  );
};

export default TestimonialItem;
