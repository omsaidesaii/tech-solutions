import type { ComponentType } from "react";

import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type StatItem = {
  icon: ComponentType;
  value: string;
  description: string;
}[];

const AboutUs = ({ stats }: { stats: StatItem }) => {
  return (
    <section className="bg-background min-h-screen py-8 sm:py-16 lg:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 space-y-6 md:mb-16 lg:mb-24">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Who We Are
            </p>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About TechSolutions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            We are a leading provider of enterprise IT solutions, dedicated to
            transforming businesses through innovative technology. With over 15
            years of experience, our team of experts delivers cutting-edge
            solutions that drive digital transformation and business growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="group rounded-lg text-base">
              <a href="/contact">
                Get in Touch
                <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-lg text-base"
            >
              <a href="/products">View Our Solutions</a>
            </Button>
          </div>
        </div>

        {/* Image and stats */}
        <div className="relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24">
          <div className="aspect-video w-full overflow-hidden rounded-2xl lg:h-[500px] bg-muted/50 border">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop&q=80"
              alt="TechSolutions Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stats card overlapping the image section */}
          <div className="bg-background grid gap-6 sm:gap-8 lg:gap-10 rounded-2xl border shadow-xl p-6 sm:p-8 grid-cols-2 lg:absolute lg:-bottom-20 lg:left-1/2 lg:max-w-[90%] xl:max-w-none lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center min-w-0"
              >
                <div className="flex size-10 sm:size-12 items-center justify-center rounded-full bg-primary/10 text-primary [&>svg]:size-5 [&>svg]:sm:size-6 shrink-0">
                  <stat.icon />
                </div>
                <span className="text-2xl sm:text-3xl font-bold">
                  {stat.value}
                </span>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base font-medium break-words">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-20 sm:mt-28 lg:mt-32 grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-muted/50 border">
            <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary sm:w-6 sm:h-6"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              To empower businesses with innovative IT solutions that drive
              digital transformation, enhance operational efficiency, and create
              sustainable competitive advantages in an ever-evolving
              technological landscape.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-2xl bg-muted/50 border">
            <div className="size-10 sm:size-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary sm:w-6 sm:h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              To be the global leader in enterprise IT solutions, recognized for
              our commitment to innovation, excellence, and client success. We
              envision a future where technology seamlessly integrates with
              business to unlock unlimited potential.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Core Values</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "Continuously pushing boundaries to deliver cutting-edge solutions",
              },
              {
                title: "Excellence",
                description:
                  "Committed to the highest standards in everything we deliver",
              },
              {
                title: "Integrity",
                description:
                  "Building trust through transparency and ethical practices",
              },
              {
                title: "Collaboration",
                description: "Working together with clients as true partners",
              },
              {
                title: "Customer Focus",
                description:
                  "Putting client success at the heart of our mission",
              },
              {
                title: "Agility",
                description: "Adapting quickly to meet evolving business needs",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl border bg-card hover:border-primary/50 transition-colors"
              >
                <h4 className="text-lg sm:text-xl font-bold mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
