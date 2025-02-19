"use client";

import React from "react";
import Link from "next/link";

import createRipple from "@/utils/createRipple";

function RippleLink({
  icon,
  color,
  style,
  border,
  rounded,
  location,
  children,
  className,
  fullWidth,
  rippleColor,
  target,
}) {
  return (
    <Link
      href={location ? location : "#"}
      target={target ? target : "_blank"}
      className={`ripple-button items-center py-2.5 px-8 hover:scale-105 active:scale-100 transition-all ease-in duration-150 text-center text-base 3xl:text-lg ${
        border ? "border-2" : ""
      } ${className}`}
      style={{
        width: fullWidth ? "100%" : "fit-content",
        color: color ? color : "white",
        borderRadius: rounded || "9999px",
        ...style,
      }}
      onClick={(event) => createRipple(event, rippleColor)}
    >
      {children}
      {icon}
    </Link>
  );
}

export default RippleLink;
