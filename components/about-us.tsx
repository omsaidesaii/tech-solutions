import { MedalIcon, SparklesIcon, StarIcon, TargetIcon } from 'lucide-react'

import AboutUs from '@/components/shadcn-studio/blocks/about-us-page-01/about-us-page-01'

const stats = [
  {
    icon: SparklesIcon,
    value: '15+',
    description: 'Years of IT Excellence'
  },
  {
    icon: TargetIcon,
    value: '500+',
    description: 'Enterprise Projects Delivered'
  },
  {
    icon: StarIcon,
    value: '98%',
    description: 'Client Satisfaction Rate'
  },
  {
    icon: MedalIcon,
    value: '50+',
    description: 'Industry Awards Won'
  }
]

const AboutUsPage = () => {
  return <AboutUs stats={stats} />
}

export default AboutUsPage
