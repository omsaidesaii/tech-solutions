import Pricing from '@/components/shadcn-studio/blocks/pricing-component-01/pricing-component-01'

const pricingData = [
  {
    id: 'starter',
    title: 'Starter',
    description: 'Perfect for small businesses and startups',
    monthly: 2999,
    annual: 29999
  },
  {
    id: 'professional',
    title: 'Enterprise',
    description: 'Advanced solutions for large organizations',
    monthly: 9999,
    annual: 99999
  }
]

const PricingPage = () => {
  return <Pricing pricingData={pricingData} />
}

export default PricingPage
