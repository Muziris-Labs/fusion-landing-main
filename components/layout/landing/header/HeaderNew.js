import RippleLink from "@/components/ui/buttons/RippleLink";
import Devices from "./Devices";
import SmallFeatures from "./SmallFeatures";
import Image from "next/image";
import { Monitor, Smartphone } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const chains = [
  {
    id: 1,
    name: "Optimism",
    designation: "op.getfusion.tech",
    image: "/landing/header/chains/op-logo.svg",
  },
  {
    id: 2,
    name: "Base",
    designation: "base.getfusion.tech",
    image: "/landing/header/chains/base-logo.svg",
  },
  {
    id: 3,
    name: "Fraxtal",
    designation: "fraxtal.getfusion.tech",
    image: "/landing/header/chains/frax-logo.png",
  },
];

export default function HeaderNew() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col mt-52">
        <div className="bg-black/80 rounded-full py-1.5 px-4 mb-5 text-white text-sm font-light flex items-center">
          Fusion is now live on
          <Image
            src="/landing/header/fraxtal.png"
            width={20}
            height={20}
            alt="Fraxtal"
            className="mr-1 ml-2"
          />
          Fraxtal Mainnet
        </div>

        <h1 className="lg:text-5xl font-semibold opacity-80 text-center text-4xl">
          The Only Wallet You'll Ever Need
        </h1>
        <h3 className="lg:text-lg text-sm mt-2 text-gray-500 font-light text-center">
          Your journey to seamless, secure, and private multichain management
          starts here.
        </h3>

        <div className="flex items-center gap-5 mt-10">
          <RippleLink
            location="https://app.getfusion.tech"
            color="#fff"
            className="bg-black/80 font-light flex items-center text-sm px-12 py-3"
          >
            Launch App <Monitor size={16} className="ml-2" />
          </RippleLink>

          <RippleLink
            location="https://app.getfusion.tech"
            color="#000"
            className="bg-gray-300/80 font-light flex items-center text-sm px-12 py-3"
          >
            Join Waitlist <Smartphone size={16} className="ml-2" />
          </RippleLink>
        </div>

        <div className="flex flex-row items-center justify-center -ml-3 mt-5 mb-5 w-full">
          <AnimatedTooltip items={chains} />
        </div>

        <Devices />

        <SmallFeatures />
      </div>

      <BackgroundBeams className="-z-50 opacity-50" />
    </>
  );
}
