"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Logos = {
  image: string;
  alt: string;
};

const LogoCloud = ({ logos }: { logos: Logos[] }) => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-muted py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            <span>A thriving</span>{" "}
            <span className="relative z-1">
              community of businesses
              <span className="bg-primary absolute bottom-1 left-0 -z-1 h-px w-full"></span>
            </span>{" "}
            <span>driving innovation</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Proudly partnering with top brands to drive success.
          </p>
        </div>

        <Card className="py-8 sm:py-14 shadow-lg overflow-hidden">
          <CardContent className="px-4 sm:px-14">
            {/* Desktop: Grid layout */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
              {logos.map((logo, index) => (
                <div key={index} className="relative h-7 w-24">
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Mobile & Tablet: Flowing carousel */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div className="flex animate-scroll gap-12">
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="shrink-0 flex items-center justify-center relative h-8 w-24"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.alt}
                        fill
                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoCloud;
