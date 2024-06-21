import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-yellow-400">
      <SignIn  signUpFallbackRedirectUrl={'/sign-up'} fallbackRedirectUrl={'/dashboard'}/>
    </div>
  );
}
