import React from "react";
import Link from "next/link";

const ButtonLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <button>{children}</button>
    </a>
  );
});

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
