import { HeartIcon, ShoppingCartIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

export type ProductItem = {
  image: string
  imgAlt: string
  name: string
  price: number
  salePrice?: number
  badges: string[]
}

type ProductProps = {
  products: ProductItem[]
}

const ProductList = ({ products }: ProductProps) => {
  return (
    <section className='bg-background min-h-screen py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Back Button and Header */}
        <div className='space-y-6'>
          <a 
            href='/' 
            className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
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
              className='group-hover:-translate-x-1 transition-transform'
            >
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            <span className='font-medium'>Back to Home</span>
          </a>
          
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='h-1 w-12 bg-primary rounded-full'></div>
              <p className='text-sm font-semibold text-primary uppercase tracking-wider'>Our Solutions</p>
            </div>
            <h1 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
              Enterprise IT Services & Solutions
            </h1>
            <p className='text-muted-foreground text-lg max-w-3xl'>
              Discover our comprehensive suite of enterprise-grade IT solutions designed to transform your business and drive digital innovation.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Product Cards */}
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={cn(
                'group border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden',
                product.salePrice && 'relative'
              )}
            >
              {/* Sale Badge */}
              {product.salePrice && (
                <Badge className='bg-destructive text-white absolute top-4 right-4 z-10 rounded-md px-3 py-1.5 uppercase font-semibold shadow-lg'>
                  Special Offer
                </Badge>
              )}

              <CardContent className='flex flex-1 flex-col justify-between gap-6 p-6'>
                {/* Product Image */}
                <div className='relative overflow-hidden rounded-lg bg-muted/50 p-8'>
                  <img 
                    src={product.image} 
                    alt={product.imgAlt} 
                    className='mx-auto h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105' 
                  />
                </div>

                {/* Product Details */}
                <div className='space-y-4 flex-1 flex flex-col'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='text-xl font-bold group-hover:text-primary transition-colors'>
                      {product.name}
                    </h3>
                    <div className='flex flex-wrap items-center gap-2'>
                      {product.badges.map((badge, idx) => (
                        <Badge
                          key={idx}
                          variant='secondary'
                          className='rounded-md bg-primary/10 text-primary hover:bg-primary/20 font-medium'
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className='my-2' />

                  {/* Product Price and Actions */}
                  <div className='flex items-center justify-between mt-auto'>
                    <div className='flex flex-col gap-1'>
                      {!product.salePrice && (
                        <span className='text-2xl font-bold'>${product.price.toLocaleString()}</span>
                      )}
                      {product.salePrice && (
                        <>
                          <span className='text-2xl font-bold text-primary'>
                            ${product.salePrice.toLocaleString()}
                          </span>
                          <span className='text-sm text-muted-foreground line-through'>
                            ${product.price.toLocaleString()}
                          </span>
                        </>
                      )}
                      <span className='text-xs text-muted-foreground'>Starting price</span>
                    </div>

                    <Button className='rounded-lg'>
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className='bg-muted rounded-2xl p-8 sm:p-12 text-center space-y-6'>
          <h2 className='text-2xl font-bold sm:text-3xl'>
            Need a Custom Solution?
          </h2>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            Our team of experts can design and implement tailored IT solutions that perfectly match your business requirements.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Button size='lg' asChild>
              <a href='/contact'>Contact Sales</a>
            </Button>
            <Button size='lg' variant='outline' asChild>
              <a href='/about-us'>Learn More About Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductList
