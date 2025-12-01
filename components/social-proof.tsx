import SocialProof from '@/components/shadcn-studio/blocks/social-proof-01/social-proof-01'

const features = [
  {
    title: 'Advanced Cloud Infrastructure & Scalability',
    description: 'Deploy and scale applications seamlessly with our enterprise-grade cloud solutions'
  },
  {
    title: 'Real-time Analytics & Business Intelligence',
    description: 'Make data-driven decisions with powerful analytics and customizable dashboards'
  }
]

const SocialProofPage = () => {
  return <SocialProof features={features} />
}

export default SocialProofPage
