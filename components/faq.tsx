import FAQ from '@/components/shadcn-studio/blocks/faq-component-01/faq-component-01'

const faqItems = [
  {
    question: 'What cloud platforms do you support?',
    answer:
      'We support all major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform. Our team has extensive experience in multi-cloud and hybrid cloud deployments, ensuring you can leverage the best features of each platform for your specific needs.'
  },
  {
    question: 'How long does a typical implementation take?',
    answer:
      'Implementation timelines vary based on project scope and complexity. A standard cloud migration typically takes 3-6 months, while custom software development projects can range from 2-12 months. We provide detailed project timelines during our initial consultation phase.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes, we offer comprehensive support and maintenance packages tailored to your needs. This includes 24/7 monitoring, regular updates, security patches, performance optimization, and dedicated technical support. Our SLA guarantees ensure your systems remain operational and secure.'
  },
  {
    question: 'What security measures do you implement?',
    answer:
      'Security is our top priority. We implement industry-standard security practices including encryption at rest and in transit, multi-factor authentication, regular security audits, compliance with GDPR/HIPAA/SOC2, penetration testing, and continuous monitoring. We also provide security training for your team.'
  }
]

const FAQPage = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQPage
