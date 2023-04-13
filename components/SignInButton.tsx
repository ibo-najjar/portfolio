"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

interface SignInButtonProps {
  className?: string;
  label: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({ className, label }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGithub = async () => {
    setIsLoading(true);

    try {
      await signIn("github");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={signInWithGithub}
      className={className}
    >
      {label}
    </button>
  );
};

export default SignInButton;
