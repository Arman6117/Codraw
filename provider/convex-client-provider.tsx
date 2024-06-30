"use client";
import { useAuth, ClerkProvider } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import Loading from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);
export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
 

  return (
    <ClerkProvider >
      
      <ConvexProviderWithClerk useAuth={useAuth}  client={convex}>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};