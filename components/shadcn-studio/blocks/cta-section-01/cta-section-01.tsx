import { Card, CardContent } from '@/components/ui/card'

const CTA = () => {
  return (
    <section className='bg-muted py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Card className='rounded-3xl border-none py-8 shadow-lg sm:py-16 lg:py-24'>
          <CardContent className='flex flex-wrap items-center justify-between gap-8 px-8 sm:flex-nowrap sm:px-16 lg:px-24'>
            <div className='max-w-xs lg:max-w-lg'>
              <h2 className='mb-4 text-3xl font-bold'>Ready to Transform Your Business?</h2>
              <p className='text-muted-foreground text-lg font-medium'>
                Schedule a consultation with our experts to discuss how our enterprise IT solutions can drive your digital transformation and accelerate growth.
              </p>
            </div>
            <div className='flex flex-wrap items-center gap-6 max-md:w-full max-md:flex-col md:justify-end'>
              <a 
                href='/contact'
                className='bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center rounded-md px-8 py-4 text-base font-semibold transition-colors'
              >
                Schedule Consultation
              </a>
              <a 
                href='/products'
                className='border-primary text-primary hover:bg-primary/10 flex items-center justify-center rounded-md border-2 px-8 py-4 text-base font-semibold transition-colors'
              >
                View Solutions
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CTA
