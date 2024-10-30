import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UserButton />
    </div>
  );
}
