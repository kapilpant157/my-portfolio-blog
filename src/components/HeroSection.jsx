"use client";

import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] overflow-hidden text-[var(--foreground)]">
      {/* Content Container */}
      <div className="container mx-auto flex flex-col items-center px-4 py-2 md:flex-row md:py-8 lg:px-8">
        {/* Left Content - Text & Buttons */}
        <div className="mb-8 flex w-full flex-col items-center text-center md:mb-0 md:w-2/3 md:items-start md:text-left lg:pr-8">
          <h1 className="mb-4 text-3xl font-medium sm:text-4xl lg:text-5xl">
            Hi, I'm{" "}
            <span className="text-[var(--primary)]">Kapil Dev Pant</span>
          </h1>
          
          <p className="mb-6 text-base leading-relaxed opacity-90 sm:text-lg md:mb-8 md:max-w-[600px]">
            User Interface Designer based in Nepal. I create beautiful,
            functional interfaces that help businesses grow.
          </p>

          {/* Primary CTA */}
          <div className="mb-6 flex w-full justify-center md:mb-8 md:justify-start">
            <LinkButton
              href="/contact"
              variant="primary"
              className="px-6 py-2 text-base sm:text-lg"
              aria-label="Contact Me"
            >
              Contact Me
            </LinkButton>
          </div>

          {/* Availability Notice */}
          <p className="mb-6 text-sm text-[var(--accent)] md:mb-8">
            Available for freelance work and collaborations
          </p>

          {/* Secondary CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <LinkButton 
              href="/cv.pdf" 
              variant="secondary" 
              size="md" 
              isExternal
              aria-label="Download CV"
            >
              Download CV
            </LinkButton>
            <LinkButton 
              href="/projects" 
              variant="secondary" 
              size="md"
              aria-label="View Projects"
            >
              View Projects
            </LinkButton>
          </div>
        </div>

        {/* Right Image - Responsive */}
        <div className="relative  w-full max-w-[400px] md:mt-0 md:w-1/3 md:max-w-none lg:w-2/6">
          <div className="aspect-[1] w-full">
            <Image
              src="/images/lines.png"
              alt="Kapil Dev - UI/UX Designer"
              fill
              className="rounded object-cover object-center"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}