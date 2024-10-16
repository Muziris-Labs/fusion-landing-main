import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="2xl:px-52 xl:px-20 px-5 sm:px-10 relative bg-[#f3f3f3] w-full flex items-center justify-center py-10">
      <div className="bg-[#B09DFF] w-full flex relative flex-col lg:items-start items-center lg:justify-between gap-5 lg:gap-0 rounded-3xl p-10 z-10 lg:h-[400px] overflow-hidden">
        <div className="flex flex-col">
          <p className="text-3xl font-medium lg:text-left text-center">
            Join the Fusion Family Today!
          </p>
          <p className="text-lg font-light lg:text-left text-center">
            Don't let crypto confusion hold you back. With Fusion Wallet, you're
            in control!
          </p>
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-5">
          <RippleLink
            location="https://app.getfusion.tech"
            color="#fff"
            className="bg-black/80 font-light text-sm px-12 py-3"
          >
            Discord
          </RippleLink>
          <RippleLink
            location="https://app.getfusion.tech"
            color="#fff"
            className="bg-black/80 font-light text-sm px-12 py-3"
          >
            Twitter/X
          </RippleLink>
        </div>

        <Image
          src="/landing/social/acheivements.png"
          width={600}
          height={200}
          alt="fusion"
          className="lg:absolute xl:right-0 -right-20 lg:mb-0 -mb-20"
        />
      </div>
      <div className="absolute bg-[#252525] w-full bottom-0 h-[50%]"></div>
    </div>
  );
}
