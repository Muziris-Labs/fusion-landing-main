import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function TestimonialNew() {
  return (
    <div className="2xl:px-52 xl:px-20 px-5 sm:px-10 relative bg-[#252525] w-full flex items-center justify-center py-10">
      <div className="bg-white w-full flex relative flex-col lg:items-start items-center lg:justify-between gap-5 lg:gap-0 rounded-3xl p-10 z-10 lg:h-[400px] overflow-hidden">
        <div className="flex flex-col lg:text-left text-center">
          <p className="text-3xl font-medium">Loved by Many, Powered by you</p>
          <p className="text-lg font-light">What Our Users Are Saying</p>
        </div>
        <div className="flex flex-col gap-5 lg:text-left text-center">
          <p className="sm:w-96 w-fit font-light">
            It just kind of makes using a web3 wallet really easy. I think
            that's a super important thing in this space where things can get a
            bit complicated. I've talked in the past about how it's not normal
            to inscribe 24 words into metal and hide that somewhere. Fusion
            Wallet which makes the user experience so good, is one way that we
            are going to onboard new users to web3.
          </p>
          <p className="text-lg font-medium">Richard, ChainLink Labs</p>
        </div>
        <Image
          src="/landing/testimonials/5star.png"
          width={400}
          height={200}
          alt="fusion"
          className="lg:absolute lg:right-10 -right-20 lg:mb-0 -mb-10 top-0"
        />
      </div>

      <div className="absolute bg-[#f3f3f3] w-full bottom-0 h-[50%]"></div>
    </div>
  );
}
