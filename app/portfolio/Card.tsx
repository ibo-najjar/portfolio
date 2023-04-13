import Image from "next/image";
import { FC } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { SiTailwindcss, SiNextdotjs, SiVercel } from "react-icons/si";

interface CardProps {
  url: string;
  image: string;
  githubUrl?: string;
  tools: string[];
  description: string;
  title: string;
}

const Card: FC<CardProps> = ({
  description,
  image,
  title,
  tools,
  url,
  githubUrl,
}) => {
  return (
    <div className="flex w-full gap-4 mx-auto">
      <div className="odd:order-first order-last flex-shrink-0 w-[300px]">
        <h3 className="mt-0">{title}</h3>
        <p>{description}</p>
        <div className="w-full pr-10">
          <div className="bg-neutral-800 px-2 flex h-8 items-center rounded-lg space-x-3">
            <Image
              src="/icons/thirdweb.svg"
              alt="Third Web"
              width={20}
              height={20}
            />
            <SiVercel size={18} fill="#fff" />
            <SiTailwindcss size={20} fill="#38BDF8" />
            <SiNextdotjs size={18} fill="#fff" />
            <Image src="/icons/eth.svg" alt="Ethereum" width={15} height={15} />
          </div>
        </div>
      </div>
      {/* WINDOW */}
      <div className="w-[400px] h-[220px] border rounded-md shadow-lg overflow-hidden border-neutral-700 hover:scale-105 transition duration-300 cursor-pointer flex-shrink-0">
        <div className="h-8 border-b flex justify-between items-center px-3 bg-neutral-800 border-neutral-700">
          <div className="flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <div className="h-2 w-2 rounded-full bg-green-400" />
          </div>
          <div className="w-full px-10">
            <div className="w-full mx-auto text-[10px] py-[1px] bg-neutral-900 rounded-md px-5 text-center text-neutral-300 flex items-center space-x-1">
              <BsLink45Deg />
              <span className="">{url}</span>
            </div>
          </div>
          <div className=" text-neutral-300 flex items-center text-xs">
            <span className="">1.2k</span>
          </div>
        </div>
        <div className="h-full w-full relative flex justify-center items-center">
          <Image
            src={`/og/${image}`}
            alt="NFT"
            width={400}
            height={188}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
