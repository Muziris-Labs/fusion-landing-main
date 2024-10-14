import Image from "next/image";

export default function PartnersNew() {
  return (
    <div className="bg-[#252525] w-full flex py-10 gap-10 flex-col items-center justify-center px-52">
      <h2 className="text-2xl font-medium text-white">Partners</h2>

      <div className="flex items-center gap-10 w-full">
        <div className="flex-1 flex items-center  min-w-40 min-h-12 relative prevent-select">
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
            className="mt-1 scale-75"
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
      <div className="flex items-center gap-10 w-full">
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
