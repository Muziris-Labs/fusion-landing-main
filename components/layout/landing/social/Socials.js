import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function Socials() {
  return (
    <div className="px-52 relative bg-[#f3f3f3] w-full flex items-center justify-center py-10">
      <div className="bg-[#B09DFF] w-full flex relative flex-col justify-between rounded-3xl p-10 z-10 h-[400px] overflow-hidden">
        <Image
          src="/landing/social/acheivements.png"
          width={600}
          height={200}
          alt="fusion"
          className="absolute right-0"
        />
        <div className="flex flex-col">
          <p className="text-3xl font-medium">Join the Fusion Family Today!</p>
          <p className="text-lg font-light">
            Don't let crypto confusion hold you back. With Fusion Wallet, you're
            in control!
          </p>
        </div>
        <div className="flex items-center gap-5">
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
      </div>
      <div className="absolute bg-[#252525] w-full bottom-0 h-[50%]"></div>
    </div>
  );
}
