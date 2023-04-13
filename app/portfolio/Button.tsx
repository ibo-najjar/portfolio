import { FC } from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

interface ButtonProps {
  href: string;
}

const Button: FC<ButtonProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className="mt-3 px-3 py-1 bg-neutral-800 flex items-center w-fit rounded-md space-x-2 text-neutral-200"
    >
      <AiFillGithub size={18} fill="rgb(229, 229, 229)" />
      <h5>View Repo</h5>
    </Link>
  );
};

export default Button;
