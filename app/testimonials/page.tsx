import { FC } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import SignInButton from "components/SignInButton";
import SignOutButton from "components/SignOutButton";
import { db } from "lib/db";
import Image from "next/image";
import Input from "./input";
import { formatDistance } from "date-fns";

interface pageProps {}

const page = async ({}) => {
  console.log("db", process.env.DATABASE_URL);
  const session = await getServerSession(authOptions);

  console.log(session);

  const messages = await db.message.findMany({});

  return (
    <div className="prose prose-invert space-y-4">
      <div className="flex flex-shrink-0 items-center space-x-2">
        <h2 className="mt-1 mb-0">GO CRAZY CHAT</h2>
        <Image
          src="/pog.png"
          alt="Picture of the author"
          width={34.9}
          height={48}
          className="flex-shrink-0 h-12 w-auto"
        />
      </div>
      <div>
        {session?.user ? (
          <div className="mb-1">
            Signed in as {session.user?.name}{" "}
            <SignOutButton
              label="Sign out"
              className="underline underline-offset-2 text-neutral-100 cursor-pointer hover:text-neutral-400 transition"
            />
          </div>
        ) : (
          <div className="mb-1">
            You must be signed in to send a message.{" "}
            <SignInButton
              label="Sign in with github"
              className="underline underline-offset-2 text-neutral-100 cursor-pointer hover:text-neutral-400 transition"
            />
          </div>
        )}
        <Input session={session} />
      </div>
      <div className="prose-sm">
        {messages.map((message: any) => {
          const date = new Date(message.createdAt);
          const time =
            date.getHours().toString().padStart(2, "0") +
            ":" +
            date.getMinutes().toString().padStart(2, "0");
          return (
            <div key={message.id} className="flex space-x-2">
              <div className="">{time}</div>
              <div className="font-semibold text-neutral-100">
                {message.name}:
              </div>
              <div className="flex-1">{message.message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
