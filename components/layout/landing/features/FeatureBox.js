import Image from "next/image";

export default function FeatureBox({
  line1,
  line2,
  line3,
  desc,
  image,
  alt,
  extended = false,
  comingSoon = false,
}) {
  return (
    (!extended && (
      <div className="w-full bg-white rounded-3xl flex-1 flex flex-col px-10 py-10 relative overflow-hidden">
        {comingSoon && (
          <div className="bg-blue-400 w-fit px-3 py-1 text-white rounded-full absolute top-4 right-4 text-xs">
            Coming Soon
          </div>
        )}
        <div className="text-3xl font-regular relative">
          {line1} <br /> {line2} <br />
          <p className="absolute"> {line3}</p>
        </div>
        <div className="w-full flex items-center justify-center my-5">
          <Image src={image} width={180} height={180} alt={alt} />
        </div>
        <p className="text-xl text-gray-600 pr-7">{desc}</p>
      </div>
    )) || (
      <div className="w-full bg-white rounded-3xl flex-1 col-span-2 flex flex-col px-10 py-10">
        <div className="text-3xl font-regular relative">
          {line1} <br /> {line2} <br />
          <p className="absolute"> {line3}</p>
        </div>
        <div className="w-full flex items-center justify-end my-5 relative h-[180px]">
          <Image
            src={image}
            width={380}
            height={250}
            alt={alt}
            className="absolute"
          />
        </div>
        <p className="text-xl text-gray-600 pr-[50%]">{desc}</p>
      </div>
    )
  );
}
