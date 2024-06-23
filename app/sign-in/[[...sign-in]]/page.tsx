import { SignIn } from "@clerk/nextjs";
import React from "react";

export const runtime = "edge";

const SignInPage = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
