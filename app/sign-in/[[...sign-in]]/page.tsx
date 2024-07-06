import { LandingNav } from "@/components/home/LandingNav";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
}