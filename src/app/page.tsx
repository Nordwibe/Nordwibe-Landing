import { Hero } from "./components/hero";
import { Slider } from "./components/slider";
import { CompatibilitySection } from "./components/compatibility";
import { HowWeKnowSection } from "./components/how-we-know";
import { GallerySection } from "./components/gallery";
import { ActionButtonsSection } from "./components/action-buttons";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <CompatibilitySection />
      <HowWeKnowSection />
      <GallerySection />
      <ActionButtonsSection />
      <Footer />
    </>
  );
}