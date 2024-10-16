import Image from "next/image";

export default function PartnersNew() {
  return (
    <div className="bg-[#252525] w-full flex py-10 gap-10 flex-col items-center justify-center 2xl:px-52 xl:px-20 px-5 sm:px-10">
      <h2 className="text-2xl font-medium text-white">Partners</h2>

      <div className="flex items-center flex-col sm:flex-row gap-10 w-full">
        <div className="flex-1 lg:flex items-center  min-w-40 min-h-12 relative prevent-select hidden">
          <Image
            src="/landing/partners/unblock-logo.svg"
            alt="Unblock Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
          />
        </div>
        <div className="flex-1 flex items-center min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/frax.svg"
            alt="Unblock Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
            className="mt-1 sm:scale-75 scale-110"
          />
        </div>

        <div className="flex-1 flex items-center  min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/keycard-logo.svg"
            alt="Keycard Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
          />
        </div>
      </div>
      <div className="flex items-center flex-col sm:flex-row gap-10 w-full">
        <div className="flex-1 lg:hidden items-center  min-w-40 min-h-12 relative prevent-select flex">
          <Image
            src="/landing/partners/unblock-logo.svg"
            alt="Unblock Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
          />
        </div>
        <div className="flex-1 flex items-center  min-w-40 min-h-12 relative prevent-select">
          <Image
            src="/landing/partners/banklessDAO-logo.svg"
            alt="Bankless Logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "start",
            }}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}
