import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-yellow-400">
      <SignUp signInFallbackRedirectUrl={'/sign-'} fallbackRedirectUrl={'/dashboard'}/>
    </div>
  );
}
