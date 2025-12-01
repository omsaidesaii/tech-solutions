import { Clock8Icon, MapPinIcon, BriefcaseBusinessIcon, PhoneIcon } from 'lucide-react'

import ContactUs from '@/components/shadcn-studio/blocks/contact-us-page-01/contact-us-page-01'

const contactInfo = [
  {
    title: 'Business Hours',
    icon: Clock8Icon,
    description: 'Monday-Friday\n9:00 AM to 6:00 PM EST'
  },
  {
    title: 'Headquarters',
    icon: MapPinIcon,
    description: '123 Tech Boulevard\nSan Francisco, CA 94105'
  },
  {
    title: 'Sales Inquiries',
    icon: BriefcaseBusinessIcon,
    description: 'sales@techsolutions.com\nEnterprise Solutions'
  },
  {
    title: 'Support Hotline',
    icon: PhoneIcon,
    description: '+1 (888) 555-TECH\n24/7 Support Available'
  }
]

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />
}

export default ContactUsPage
