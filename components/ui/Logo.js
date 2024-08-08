import React from "react";
import Image from "next/image";

const Logo = ({
  logoWidth = 44,
  logoHeight = 44,
  textSize = "text-2xl xl:text-3xl 3xl:text-4xl",
}) => {
  return (
    <div className="flex items-center gap-2" aria-label="Fusion Logo">
      <Image
        src="/logo-2d.svg"
        width={logoWidth}
        height={logoHeight}
        alt="Fusion Logo"
        className="w-9 h-9 xl:w-10 xl:h-10 3xl:w-11 3xl:h-11"
      />

      <p className={`${textSize} font-semibold`} aria-label="Fusion Text Logo">
        Fusion
      </p>
    </div>
  );
};

export default Logo;
