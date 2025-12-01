import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'

const testimonials: TestimonialItem[] = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'TechCorp Global',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto',
    rating: 5,
    content: "Their cloud migration services transformed our infrastructure. We've seen a 40% reduction in operational costs and improved scalability."
  },
  {
    name: 'James Rodriguez',
    role: 'VP of Engineering',
    company: 'DataFlow Inc',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto',
    rating: 5,
    content: "The cybersecurity solutions provided by this team are top-notch. Our security posture has never been stronger."
  },
  {
    name: 'Emily Chen',
    role: 'Chief Digital Officer',
    company: 'Innovation Labs',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto',
    rating: 5,
    content:
      "Their AI and ML platform helped us unlock insights we never knew existed. The ROI has been exceptional."
  },
  {
    name: 'Michael Thompson',
    role: 'Head of DevOps',
    company: 'CloudScale Systems',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto',
    rating: 4,
    content:
      'The DevOps automation tools streamlined our deployment process. We now ship features 3x faster with fewer errors.'
  }
]

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
