import { GradientGrid } from "@/components/hero/GradientGrid";
import { Beams } from "@/components/utils/Beams";
import { Content } from "@/components/hero/Content";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};