import HeroSection from "@/components/HeroSection";
import FakeConsole from "@/components/FakeConsole";

export default function Home() {

  return (
    <>
      <div className="static">
        <div className="absolute z-0 bottom-0 left-0 w-full max-w-4xl mx-auto pointer-events-none">
          <FakeConsole />
        </div>
        <HeroSection />
      </div>
      
    </>
  );
}
