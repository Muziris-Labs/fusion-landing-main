import RippleLink from "@/components/ui/buttons/RippleLink";
import Devices from "./Devices";
import SmallFeatures from "./SmallFeatures";

export default function HeaderNew() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col mt-52">
        <h1 className="text-5xl font-semibold opacity-80">
          The Wallet Others Wish They Were
        </h1>
        <h3 className="text-lg mt-2 text-gray-500 font-light">
          Your journey to seamless, secure, and private multichain management
          starts here.
        </h3>

        <div className="flex items-center gap-5 mt-10">
          <RippleLink
            location="https://app.getfusion.tech"
            color="#fff"
            className="bg-black/80 font-light text-sm px-12 py-3"
          >
            Launch App
          </RippleLink>

          <RippleLink
            location="https://app.getfusion.tech"
            color="#000"
            className="bg-gray-300/80 font-light text-sm px-12 py-3"
          >
            Join Waitlist
          </RippleLink>
        </div>

        <Devices />

        <SmallFeatures />
      </div>
    </>
  );
}
