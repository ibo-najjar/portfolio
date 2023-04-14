import "./globals.css";
import localFont from "next/font/local";
import { cn } from "../lib/utils";
import Socials from "components/Socials";
import Navbar from "components/Navbar";
import Room from "./Room";

const font = localFont({
  src: "../public/fonts/Inter-Black.woff2",
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "ibo najjar",
  description: "my awesome portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-neutral-900 text-white antialiased scroll-smooth",
        font.variable
      )}
    >
      <body className="max-w-4xl mb-40 flex flex-col md:flex-row mt-8 md:mt-5 lg:mt-10 lg:mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col md:px-0 px-3 mb-20 md:mb-0">
          {children}
        </main>
        <Socials />
      </body>
    </html>
  );
}
