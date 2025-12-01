import Gallery from '@/components/shadcn-studio/blocks/gallery-component-01/gallery-component-01'

const gallerySections = [
  {
    images: [
      {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&q=80',
        alt: 'Modern office workspace'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&q=80',
        alt: 'Team collaboration'
      },
      {
        src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&q=80',
        alt: 'Data analytics dashboard'
      },
      {
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop&q=80',
        alt: 'Business planning'
      },
      {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop&q=80',
        alt: 'Technology innovation'
      }
    ]
  },
  {
    type: 'grid',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop&q=80',
        alt: 'Server infrastructure'
      },
      {
        src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=600&fit=crop&q=80',
        alt: 'Professional workspace'
      },
      {
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&q=80',
        alt: 'Virtual meeting'
      },
      {
        src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=600&fit=crop&q=80',
        alt: 'Professional team member'
      }
    ]
  },
  {
    images: [
      {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop&q=80',
        alt: 'Corporate team collaboration'
      }
    ]
  }
]

const GalleryPage = () => {
  return <Gallery sections={gallerySections} />
}

export default GalleryPage
