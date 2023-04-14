import Image from "next/image";
import { FC } from "react";

interface SocialsProps {}

const size = 18;

const Socials: FC<SocialsProps> = ({}) => {
  return (
    <div className="fixed bottom-0 right-0 py-10 px-8  space-x-4 hidden md:flex">
      <a href="dribble.com" target="_blank" className="cursor-pointer">
        <Image
          src="/icons/dribble.svg"
          alt="Dribble"
          width={size}
          height={size}
        />
      </a>
      <a href="instagram.com" target="_blank" className="cursor-pointer">
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          width={size}
          height={size}
        />
      </a>
      <a href="github.com" target="_blank" className="cursor-pointer">
        <Image
          src="/icons/github.svg"
          alt="Github"
          width={size}
          height={size}
        />
      </a>
      <a href="linkedin.com" target="_blank" className="cursor-pointer">
        <Image
          src="/icons/linkedin.svg"
          alt="Linkedin"
          width={size}
          height={size}
        />
      </a>
      <a href="instagram.com" target="_blank" className="cursor-pointer">
        <Image
          src="/icons/insta.svg"
          alt="Twitter"
          width={size}
          height={size}
        />
      </a>
      <a href="behnace.com" target="_blank" className="cursor-pointer">
        <Image
          src="/icons/behance.svg"
          alt="Behance"
          width={size}
          height={size}
        />
      </a>
    </div>
  );
};

const socials = {
  dribble: "dribble.com",
  instagram: "instagram.com",
  github: "github.com",
  linkedin: "linkedin.com",
  twitter: "twitter.com",
  behance: "behance.com",
};

export default Socials;
