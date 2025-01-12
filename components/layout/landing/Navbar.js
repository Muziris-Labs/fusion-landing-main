"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 flex items-center justify-center z-20">
      <div
        className={`flex items-center justify-between sm:min-w-[350px] sm:border w-full sm:rounded-full px-6 sm:py-3 py-5 sm:mt-5 transition-all duration-200 ${
          scrolled
            ? "bg-white/50 backdrop-blur-lg border-black sm:w-[400px]"
            : "bg-transparent border-transparent sm:w-[750px]"
        }`}
      >
        <div className="flex items-center">
          <Image
            src="/FusionLogo.svg"
            width={34}
            height={34}
            alt="Fusion Logo"
            className={`transition-transform duration-300`}
          />
          <h1 className="text-lg font-semibold">Fusion</h1>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/" className="text-sm">
            Features
          </Link>
          <Link href="/" className="text-sm font-medium">
            Launch
          </Link>
        </div>
      </div>
    </nav>
  );
}
