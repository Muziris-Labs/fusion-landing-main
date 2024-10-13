import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 flex items-center justify-center">
      <div className="flex items-center justify-between bg-gray-900/10 backdrop-blur-lg gap-40 rounded-full px-6 py-3 mt-5 opacity-80">
        <div className="flex items-center">
          <Image
            src="/FusionLogo.svg"
            width={34}
            height={34}
            alt="Fusion Logo"
          />
          <h1 className="text-lg font-semibold">Fusion</h1>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/" className="text-sm">
            Features
          </Link>
          <Link href="/" className="text-sm font-medium">
            Launch
          </Link>
        </div>
      </div>
    </nav>
  );
}
