"use client";

import { signOut } from "next-auth/react";
import React, { useState } from "react";

interface SignInButtonProps {
  className?: string;
  label: string;
}

const SignOutButton: React.FC<SignInButtonProps> = ({ label, className }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutFromGithub = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={signOutFromGithub}
      className={className}
    >
      {label}
    </button>
  );
};

export default SignOutButton;
