import RippleLink from "@/components/ui/buttons/RippleLink";
import Image from "next/image";

export default function FooterNew() {
  return (
    <div className="2xl:px-52 xl:px-20 px-5 sm:px-10  relative bg-[#f3f3f3] w-full flex flex-col items-center justify-center py-10 gap-10">
      <div className="flex items-center justify-between w-full gap-10 md:flex-row flex-col">
        <div className="flex items-center gap-1 md:flex-row flex-col">
          {" "}
          <Image
            src="/FusionLogo.svg"
            width={50}
            height={50}
            alt="Fusion Logo"
          />
          <h1 className="text-2xl font-semibold">Fusion</h1>
        </div>
        <div className="flex items-center gap-5 font-light md:flex-row flex-col">
          <p>Making Crypto Clear and Simple</p>
          <RippleLink
            location="https://app.getfusion.tech"
            color="#fff"
            className="bg-black/80 font-light text-sm px-12 py-3"
          >
            Launch App
          </RippleLink>
        </div>
      </div>

      <div className="w-full border border-black/20"></div>

      <div className="w-full flex items-center justify-center gap-5">
        <Image
          src="/landing/footer/github.png"
          width={20}
          height={20}
          alt="github"
        />
        <Image
          src="/landing/footer/twitter.png"
          width={20}
          height={20}
          alt="twitter"
        />
        <Image
          src="/landing/footer/discord.png"
          width={20}
          height={20}
          alt="discord"
        />
      </div>
    </div>
  );
}
