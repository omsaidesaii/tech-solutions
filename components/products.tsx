import ProductList from '@/components/shadcn-studio/blocks/product-list-01/product-list-01'

const productList = [
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80',
    imgAlt: 'Cloud Infrastructure Solutions',
    name: 'Cloud Infrastructure & Migration',
    price: 4999,
    badges: ['Cloud', 'AWS/Azure']
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&q=80',
    imgAlt: 'Cybersecurity Solutions',
    name: 'Enterprise Cybersecurity Suite',
    price: 7999,
    salePrice: 5999,
    badges: ['Security', 'Enterprise']
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80',
    imgAlt: 'AI & Machine Learning',
    name: 'AI & Machine Learning Platform',
    price: 9999,
    badges: ['AI/ML', 'Analytics']
  },
  {
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop&q=80',
    imgAlt: 'DevOps Solutions',
    name: 'DevOps & CI/CD Pipeline',
    price: 3999,
    badges: ['DevOps', 'Automation']
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80',
    imgAlt: 'Data Analytics Platform',
    name: 'Business Intelligence & Analytics',
    price: 6999,
    badges: ['Analytics', 'BI']
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80',
    imgAlt: 'Digital Transformation',
    name: 'Digital Transformation Consulting',
    price: 12999,
    badges: ['Consulting', 'Strategy']
  }
]

const ProductListPage = () => {
  return <ProductList products={productList} />
}

export default ProductListPage
