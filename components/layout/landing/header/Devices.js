import Image from "next/image";

export default function Devices() {
  return (
    <div
      className="w-full relative flex items-end justify-center"
      style={{
        backgroundSize: "",
      }}
    >
      <Image
        src="/landing/header/DesktopView.png"
        width={900}
        height={900}
        alt="Devices"
        className="md:block hidden"
      />
      <Image
        src="/landing/header/MobileView.png"
        width={330}
        height={330}
        alt="Devices"
        className="lg:-ml-52 md:hidden lg:block block"
      />

      <div className="w-full absolute bottom-0 bg-[url('/landing/header/PatternBg.svg')] bg-cover bg-center bg-no-repeat h-[296px] -z-10"></div>
    </div>
  );
}
