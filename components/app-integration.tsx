import AppIntegration from '@/components/shadcn-studio/blocks/app-integration-01/app-integration-01'

const integrations = [
  {
    name: 'Amazon Web Services',
    description: 'Cloud computing and infrastructure solutions',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo-bw.png',
    alt: 'AWS'
  },
  {
    name: 'Microsoft Azure',
    description: 'Enterprise cloud platform and services',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png',
    alt: 'Microsoft Azure'
  },
  {
    name: 'GitHub Enterprise',
    description: 'Secure code collaboration and DevOps',
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/github-white.png',
    alt: 'Github'
  }
]

const AppIntegrationPage = () => {
  return <AppIntegration integrations={integrations} />
}

export default AppIntegrationPage
