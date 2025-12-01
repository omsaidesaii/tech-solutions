import React from 'react'
import HeroSectionPage from '@/components/hero'
import SocialProofPage from '@/components/social-proof'
import LogoCloudPage from '@/components/logo-cloud'
import AppIntegrationPage from '@/components/app-integration'
import GalleryPage from '@/components/gallery'
import TestimonialsComponentPage from '@/components/testimonials'
import PricingPage from '@/components/pricing'
import FAQPage from '@/components/faq'
import CTASection from '@/components/cta'
import FooterPage from '@/components/footer'

const page = () => {
  return (
    <div>
      <HeroSectionPage />
      <LogoCloudPage/>
      <SocialProofPage/> 
      <AppIntegrationPage/>
      <GalleryPage/>
      <TestimonialsComponentPage/>
      <PricingPage/>
      <FAQPage/>
      <CTASection/>
      <FooterPage/>
    </div>
  )
}

export default page