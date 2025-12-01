import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DotGrid from "@/components/DotGrid";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-6 pt-6 sm:gap-12 sm:pt-12 lg:gap-24 lg:pt-24 relative overflow-hidden">
      {/* DotGrid Background - Covering entire hero section except image - Hidden on mobile */}
      <div
        className="absolute top-0 left-0 right-0 w-full pointer-events-none z-0 hidden md:block"
        style={{ height: "calc(100% - 400px)" }}
      >
        <DotGrid
          dotSize={8}
          gap={15}
          baseColor="#FFFFFF"
          activeColor="#000000"
          proximity={230}
          shockRadius={250}
          shockStrength={8}
          resistance={750}
          returnDuration={1.5}
        />
      </div>      {/* Hero Content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:gap-6 lg:gap-8 sm:px-6 lg:px-8 relative z-10">
        {/* Badge - Hidden on mobile, visible on desktop */}
        <div className="bg-muted  sm:flex items-center gap-2.5 rounded-full  px-3 py-2 text-sm">
          <Badge className="text-xs">Enterprise Solutions</Badge>
          <span className="text-muted-foreground">
            Trusted by Fortune 500 Companies
          </span>
        </div>

        {/* Heading - Larger on mobile for impact */}
        <h1 className="text-4xl leading-tight font-bold text-balance sm:text-4xl lg:text-5xl sm:leading-[1.29167] px-2 sm:px-0">
          Transform Your Business with
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="relative inline-block">
            Innovative Technology
            <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-x-0 bottom-0 w-full translate-y-1/2 hidden sm:block"
            >
              <path
                d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                stroke="url(#paint0_linear_10365_68643)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10365_68643"
                  x1="18.8541"
                  y1="3.72033"
                  x2="42.6487"
                  y2="66.6308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--primary)" />
                  <stop offset="1" stopColor="var(--primary-foreground)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          Solutions
        </h1>        {/* Description - Smaller on mobile for better hierarchy */}
        <p className="text-muted-foreground max-w-2xl text-xs leading-relaxed sm:text-base px-4 sm:px-0 opacity-90">
          Empower your organization with cutting-edge IT solutions, cloud
          infrastructure, and digital transformation services.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Drive innovation, enhance productivity, and achieve your business
          goals.
        </p>

        {/* Button - Mobile friendly size */}
        <Button size="lg" className="w-full sm:w-auto max-w-xs sm:max-w-none mt-2" asChild>
          <a href="/products">Explore Our Solutions</a>
        </Button>
      </div>

      {/* Image - Optimized and responsive */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80"
          alt="Digital Technology and Innovation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;
