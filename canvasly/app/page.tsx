import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <Button>Click me</Button>
    </div>
  );
}
