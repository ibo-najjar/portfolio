import Image from "next/image";
import { FC } from "react";

interface SocialsProps {}

const Socials: FC<SocialsProps> = ({}) => {
  return (
    <div className="fixed bottom-0 right-0 py-10 px-8 flex space-x-5">
      <a href="dribble.com" target="_blank" className="cursor-pointer w-6 h-6">
        <Image src="/icons/dribble.svg" alt="Dribble" width={24} height={24} />
      </a>
      <a
        href="instagram.com"
        target="_blank"
        className="cursor-pointer w-6 h-6"
      >
        <Image
          src="/icons/instagram.svg"
          alt="Instagram"
          width={24}
          height={24}
        />
      </a>
      <a href="github.com" target="_blank" className="cursor-pointer w-6 h-6">
        <Image src="/icons/github.svg" alt="Github" width={24} height={24} />
      </a>
      <a href="linkedin.com" target="_blank" className="cursor-pointer w-6 h-6">
        <Image
          src="/icons/linkedin.svg"
          alt="Linkedin"
          width={24}
          height={24}
        />
      </a>
      <a
        href="instagram.com"
        target="_blank"
        className="cursor-pointer w-6 h-6"
      >
        <Image src="/icons/insta.svg" alt="Twitter" width={24} height={24} />
      </a>
      <a href="behnace.com" target="_blank" className="cursor-pointer w-6 h-6">
        <Image src="/icons/behance.svg" alt="Behance" width={24} height={24} />
      </a>
    </div>
  );
};

export default Socials;
