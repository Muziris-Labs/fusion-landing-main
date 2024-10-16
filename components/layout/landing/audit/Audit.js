import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function Audit() {
  return (
    <div className="2xl:px-52 xl:px-20 px-5 sm:px-10 relative bg-[#f3f3f3] w-full flex items-center justify-center py-10">
      <div className="bg-[#252525] text-white w-full flex relative flex-col gap-5 items-center lg:items-start justify-between rounded-3xl p-10 z-10 lg:h-[400px] overflow-hidden">
        <div className="flex flex-col lg:text-left text-center gap-5">
          <p className="text-3xl font-medium">Security You Can Trust</p>
          <p className="text-lg font-light lg:w-[50%]">
            At Fusion Wallet, your security is our top priority. That's why
            we've undertaken comprehensive security audits by leading blockchain
            security firms.
          </p>
        </div>

        <RippleLink
          location="#"
          color="#000"
          className="bg-white/80 font-light text-sm px-12 py-3"
          rippleColor="#fff"
        >
          Audit Report (0xCommit)
        </RippleLink>

        <Image
          src="/landing/audit/safe.png"
          width={400}
          height={200}
          alt="fusion"
          className="lg:absolute lg:right-10 -right-20 lg:mb-0 -top-5"
        />
      </div>
    </div>
  );
}
