import { SignIn } from "@/components/signin/SignIn";
import { Barlow } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function SignInPage() {
  return (
    <main className={barlowFont.className}>
      <SignIn />
    </main>
  );
}