"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "lib/utils";

interface NavbarProps {}

const paths = [
  {
    href: "/",
    label: "about",
  },
  {
    href: "/portfolio",
    label: "portfolio",
  },
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: "/testimonials",
    label: "testimonials",
  },
];

const Navbar: FC<NavbarProps> = ({}) => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  return (
    <aside className="md:w-[150px] md:flex-shrink-0 md:mx-0 md:px-0  md:mt-20">
      <div className="lg:sticky lg:top-20">
        <div className="h-14 w-14 overflow-hidden rounded-full relative mb-3 md:mb-7 ml-3 md:ml-0">
          <Image
            src="/me.jpeg"
            alt="Profile"
            width={64}
            height={64}
            className="object-cover grayscale"
            priority
          />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-between md:justify-start"
          id="nav"
        >
          {paths.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-row items-center mb-2 mt-2 md:mt-0 underline-offset-2 px-1 flex-shrink-0",
                pathname === href ? "text-neutral-100" : "text-neutral-400"
              )}
            >
              <h1 className="">{label}</h1>
              <div
                className={cn(
                  "w-0.5 bg-neutral-200 h-4 flex-shrink-0 animate-[pulse_0.5s_ease-in-out_infinite]",
                  pathname === href ? "inline" : "hidden"
                )}
              ></div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
