"use client";

import { cn } from "lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface inputProps {
  session: Session | null;
}

const Input: FC<inputProps> = ({ session }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<any>();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const input = form.elements.namedItem("message") as HTMLInputElement;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input.value),
      });

      input.value = "";
      const result = await res.json();

      console.log("res", result);

      setIsFetching(false);
      setIsFetching(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh();
      });
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className={cn(
        "flex space-x-2 items-center justify-between",
        isFetching || loading ? "opacity-100" : "opacity-70"
      )}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter your message"
        name="message"
        id="message"
        className=" bg-neutral-800 rounded-lg py-1 px-2 w-full placeholder:text-neutral-500 disabled:cursor-not-allowed"
        required
        autoComplete="off"
        disabled={isFetching || !session}
      />
      <button
        type="submit"
        className="text-neutral-500 rounded-lg py-1 px-2 hover:text-neutral-300 disabled:hover:text-neutral-500 transition bg-neutral-800 cursor-pointer disabled:cursor-not-allowed"
        disabled={isFetching || loading || !session}
      >
        Send
      </button>
    </form>
  );
};

export default Input;
