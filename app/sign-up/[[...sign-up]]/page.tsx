import { SignUp } from "@clerk/nextjs";
import React from "react";

export const runtime = "edge";

const SignUpPage = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
