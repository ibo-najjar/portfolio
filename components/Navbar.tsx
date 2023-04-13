import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0  mt-20">
      <div className="lg:sticky lg:top-20">
        <div className="h-16 w-16 overflow-hidden rounded-full relative mb-7">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={64}
            height={64}
            className="object-cover"
            priority
          />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link
            href="/"
            className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0"
          >
            about
          </Link>
          <Link
            href="/portfolio"
            className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0"
          >
            portfolio
          </Link>
          <Link
            href="/blog"
            className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0"
          >
            blog
          </Link>
          <Link
            href="/testimonials"
            className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0"
          >
            testimonials
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
