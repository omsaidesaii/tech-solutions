import Link from "next/link";
import * as LucideIcons from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export type ProductItem = {
  icon: string;
  name: string;
  description: string;
  badges: string[];
  featured?: boolean;
};

type ProductProps = {
  products: ProductItem[];
};

const ProductList = ({ products }: ProductProps) => {
  return (
    <section className="bg-background min-h-screen py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8">
        {/* Back Button and Header */}
        <div className="space-y-6">
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

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Solutions
              </p>
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Enterprise IT Services & Solutions
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Discover our comprehensive suite of enterprise-grade IT solutions
              designed to transform your business and drive digital innovation.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Product Cards */}
          {products.map((product, index) => (
            <Card
              key={index}
              className={cn(
                "group relative border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl overflow-hidden bg-card",
                product.featured && "border-primary/50 shadow-lg"
              )}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 rounded-bl-lg font-semibold text-sm flex items-center gap-1.5 shadow-md z-10">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Popular
                </div>
              )}

              <CardContent className="flex flex-1 flex-col gap-6 p-0">
                {/* Product Icon */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 h-48 flex items-center justify-center border-b">
                  {/* Icon container with background circle */}
                  <div className="relative z-10 transition-all duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500"></div>
                    <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      {(() => {
                        const IconComponent = LucideIcons[
                          product.icon as keyof typeof LucideIcons
                        ] as React.ComponentType<{
                          className?: string;
                          strokeWidth?: number;
                        }>;
                        return IconComponent ? (
                          <IconComponent
                            className="w-16 h-16 text-primary"
                            strokeWidth={1.5}
                          />
                        ) : (
                          <LucideIcons.Package
                            className="w-16 h-16 text-primary"
                            strokeWidth={1.5}
                          />
                        );
                      })()}
                    </div>
                  </div>
                  {/* Grid pattern background */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Product Details */}
                <div className="space-y-5 flex-1 flex flex-col px-6 pb-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {product.badges.map((badge, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 font-medium text-xs px-3 py-1"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto pt-4">
                    <Button
                      className="w-full rounded-lg group/btn relative overflow-hidden"
                      size="lg"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Explore Solution
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform group-hover/btn:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team of experts can design and implement tailored IT solutions
            that perfectly match your business requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about-us">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
