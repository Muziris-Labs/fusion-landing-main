import FeatureBox from "./FeatureBox";

const Features = [
  {
    line1: "Keep Your",
    line2: "Money Private",
    line3: null,
    desc: "We use zk-SNARKS to make sure your transactions stay your business.",
    image: "/landing/features/fingerprint.png",
    alt: "Fingerprint Image",
  },
  {
    line1: "One Domain",
    line2: "for All Your Crypto",
    line3: null,
    desc: "No more switching between apps. Manage everything in one place!",
    image: "/landing/features/shopping.png",
    alt: "Shopping Image",
  },
  {
    line1: "So Easy, Your",
    line2: "Grandma Could",
    line3: "Use It",
    desc: "Our app is designed to be simple and straightforward for everyone.",
    image: "/landing/features/grandma.png",
    alt: "Grandma Image",
  },
  {
    line1: "Universal Crypto",
    line2: "Management",
    line3: null,
    desc:
      "Access and manage assets on Superchain, and many more — all from a single app.",
    image: "/landing/features/blocks.png",
    alt: "Universal Image",
  },
  {
    line1: "Fiat On/Off Ramp",
    line2: null,
    line3: null,
    desc: "Buy or sell crypto with traditional currencies seamlessly",
    image: "/landing/features/exchange.png",
    alt: "Fiat Image",
    extended: true,
  },
  {
    line1: "Swap Coins with",
    line2: "One Tap",
    line3: null,
    desc:
      "Trade different cryptocurrencies as easily as you'd exchange pocket change.",
    image: "/landing/features/tap.png",
    alt: "Tap Image",
  },
  {
    line1: "Hardware Wallet",
    line2: "Integration",
    line3: null,
    desc:
      "Connect your hardware wallet and manage your fusion wallet for extra security.",
    image: "/landing/features/drive.png",
    alt: "Drive Image",
  },
  {
    line1: "Always Know",
    line2: "What's Up",
    line3: null,
    desc: "Get real-time updates on your crypto's value.",
    image: "/landing/features/data.png",
    alt: "Data Image",
  },
];

export default function FeatureList() {
  return (
    <div className="w-full flex flex-col px-52 py-20 gap-10 bg-[#e4e4e4]">
      <h3 className="text-5xl font-medium">
        All You Need, <br /> Right Where You Need It
      </h3>
      <div className="w-full grid grid-cols-3 gap-10">
        {Features.map((feature, index) => (
          <FeatureBox
            key={index}
            line1={feature.line1}
            line2={feature.line2}
            line3={feature.line3}
            desc={feature.desc}
            image={feature.image}
            alt={feature.alt}
            extended={feature.extended}
          />
        ))}
      </div>
    </div>
  );
}
