// components/HeroSection.tsx
'use client'

import Image from "next/image"
import LinkButton from "@/components/ui/LinkButton" // Import the default export

export default function HeroSection() {
  return (
    <section className=" body-font bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto flex md:flex-row flex-col items-center py-12">
        {/* Left Content */}
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
            Hi, I'm <span className="text-[var(--primary)]">Kapil Dev Pant</span>
          </h1>
          <p className="mb-8 leading-relaxed opacity-90">
            User Interface Designer based in Nepal. I create beautiful, functional interfaces that help businesses grow.
          </p>

          <div className="flex w-full justify-center items-end">
            <LinkButton 
              href="/contact" 
              variant="primary"
              className="py-2 px-6 text-lg"
            >
              Contact Me
            </LinkButton>
          </div>

          <p className="text-sm mt-2 text-[var(--accent)] mb-8 w-full">
            Available for freelance work and collaborations
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <LinkButton
              href="/cv.pdf"
              variant="secondary"
              size="md"
              isExternal
            >
              Download CV
            </LinkButton>
            <LinkButton
              href="/projects"
              variant="secondary"
              size="md"
            >
              View Projects
            </LinkButton>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-4">
          <Image
            src="/images/lines.png"
            alt="Kapil Dev - UI/UX Designer"
            width={720}
            height={600}
            className="rounded object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}