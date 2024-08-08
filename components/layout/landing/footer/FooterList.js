import Link from "next/link";
import React from "react";

const socialList = [
  {
    name: "Twitter",
    url: "#",
  },
  {
    name: "Github",
    url: "#",
  },
  {
    name: "Discord",
    url: "#",
  },
];

const footerList = [
  {
    name: "Testnet",
    url: "#",
  },
  {
    name: "Waitlist",
    url: "#",
  },
];

const FooterList = () => {
  return (
    <div className="space-y-3">
      <nav aria-label="Social Media Links">
        <ul className="flex space-x-11 paragraph font-light">
          {socialList.map((item) => (
            <li key={item.name} className="animated-underline px-0.5">
              <Link className="animated-underline" href={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Footer Links">
        <ul className="flex space-x-11 paragraph text-3xl font-light">
          {footerList.map((item, index) => (
            <li key={index} className="animated-underline px-1">
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterList;
