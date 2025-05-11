import { CTA } from "@/components/cta/CTA";
import { Customers } from "@/components/customers/Customers";
import Carousel from "@/components/features/carousel/Carousel";
import { CodeDemo } from "@/components/features/code/CodeDemo";
import { FeatureGrid } from "@/components/features/grid/FeatureGrid";
import { Stats } from "@/components/features/stats/Stats";
import { Hero } from "@/components/hero/Hero";
import { Logos } from "@/components/logos/Logos";
import { Pricing } from "@/components/pricing/Pricing";
import { Barlow } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Site Title", // Replace with your actual title
  description: "Your site description", // Replace with your actual description
};


const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={barlowFont.className}>
      <Hero />
      <Logos />
      <FeatureGrid />
      <CodeDemo />
      <Carousel />
      <Customers />
      <Stats />
      <Pricing />
      <CTA />
    </main>
  );
}