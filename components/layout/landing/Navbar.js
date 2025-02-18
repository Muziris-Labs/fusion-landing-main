"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Simple throttle function implementation without 'this' references
function throttle(func, delay) {
  let lastCall = 0;
  let timeoutId = null;

  const throttledFunction = function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set a new timeout
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func(...args);
      }, delay - (now - lastCall));
    }
  };

  // Add a cancel method
  throttledFunction.cancel = function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return throttledFunction;
}

const scrollToSection = (sectionId) => (e) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);

  if (section) {
    // Use smooth scrolling behavior
    window.scrollTo({
      top: section.offsetTop - 100, // Offset for navbar height
      behavior: "smooth",
    });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Create a throttled scroll handler
    const handleScroll = throttle(() => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }, 100);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 flex items-center justify-center z-20">
      <div
        className={`flex items-center justify-between xs:border w-full xs:rounded-full px-6 xs:py-3 py-5 xs:mt-5 transition-all duration-200 ${
          scrolled
            ? "bg-white/50 backdrop-blur-lg border-black"
            : "bg-transparent border-transparent"
        }`}
        style={{
          width: scrolled ? "400px" : "750px",
          maxWidth: "100%",
          willChange: "transform, background-color, width",
        }}
      >
        <div className="flex items-center">
          <Image
            src="/FusionLogo.svg"
            width={34}
            height={34}
            alt="Fusion Logo"
            className="transition-transform duration-300"
          />
          <h1 className="text-lg font-semibold">Fusion</h1>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="#features"
            className="text-sm"
            onClick={scrollToSection("features")}
          >
            Features
          </a>
          <Link
            href="https://app.getfusion.tech"
            className="text-sm font-medium"
          >
            Launch
          </Link>
        </div>
      </div>
    </nav>
  );
}
