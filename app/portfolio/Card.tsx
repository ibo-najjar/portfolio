import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { SiTailwindcss, SiNextdotjs, SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import Button from "./Button";

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
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto items-center justify-center space-y-5 md:w-auto">
      <div className="odd:order-first order-last flex-shrink-0 md:w-[300px] space-y-3 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-neutral-400 text-sm">2021-08-01</p>
        </div>
        <p className="tracking-tight leading-6 text-neutral-300">
          {description}
        </p>
        <div className="w-full">
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
          {githubUrl && <Button href={githubUrl} />}
        </div>
      </div>
      {/* WINDOW */}
      <Link
        href={url}
        className="md:w-[400px] md:h-[220px] w-[300px] h-[160] border rounded-md shadow-lg overflow-hidden border-neutral-700 hover:scale-105 transition duration-300 cursor-pointer flex-shrink-0 mx-auto"
        target="_blank"
      >
        <div className="h-8 border-b flex justify-between items-center px-3 bg-neutral-800 border-neutral-700">
          <div className="flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <div className="h-2 w-2 rounded-full bg-green-400" />
          </div>
          <div className="w-full px-10">
            <div className="w-full mx-auto text-[10px] py-[1px] bg-neutral-900 rounded-md px-5 text-center text-neutral-300 flex items-center space-x-1">
              <BsLink45Deg />
              <span className="truncate">{url}</span>
            </div>
          </div>
          <div className=" text-neutral-300 flex items-center text-xs">
            <span className="">.</span>
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
      </Link>
    </div>
  );
};

export default Card;
