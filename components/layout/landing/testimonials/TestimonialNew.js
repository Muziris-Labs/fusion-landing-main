import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function TestimonialNew() {
  return (
    <div className="px-52 relative bg-[#252525] w-full flex items-center justify-center py-10">
      <div className="bg-white w-full flex relative flex-col justify-between rounded-3xl p-10 z-10 h-[400px] overflow-hidden">
        <Image
          src="/landing/testimonials/5star.png"
          width={400}
          height={200}
          alt="fusion"
          className="absolute right-20 top-0"
        />
        <div className="flex flex-col">
          <p className="text-3xl font-medium">Loved by Many, Powered by you</p>
          <p className="text-lg font-light">What Our Users Are Saying</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="w-96 font-light">
            As a DeFi enthusiast, I've tried dozens of wallets. Fusion Wallet is
            a game-changer. One interface for all my chains, and I never worry
            about privacy. It's like they read my mind!
          </p>
          <p className="text-lg font-medium">Baer, DAOplomats</p>
        </div>
      </div>
      <div className="absolute bg-[#f3f3f3] w-full bottom-0 h-[50%]"></div>
    </div>
  );
}
