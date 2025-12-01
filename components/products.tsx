import ProductList from "@/components/shadcn-studio/blocks/product-list-01/product-list-01";

const productList = [
  {
    icon: "CloudUpload",
    name: "Cloud Infrastructure & Migration",
    description:
      "Seamlessly migrate and manage your cloud infrastructure with our expert solutions. Scale efficiently with AWS, Azure, or Google Cloud.",
    badges: ["Cloud", "AWS/Azure"],
    featured: false,
  },
  {
    icon: "ShieldCheck",
    name: "Enterprise Cybersecurity Suite",
    description:
      "Protect your business with comprehensive security solutions including threat detection, prevention, and 24/7 monitoring.",
    badges: ["Security", "Enterprise"],
    featured: true,
  },
  {
    icon: "BrainCircuit",
    name: "AI & Machine Learning Platform",
    description:
      "Leverage cutting-edge AI and ML technologies to automate processes, gain insights, and drive intelligent decision-making.",
    badges: ["AI/ML", "Analytics"],
    featured: false,
  },
  {
    icon: "Workflow",
    name: "DevOps & CI/CD Pipeline",
    description:
      "Accelerate your development lifecycle with automated pipelines, continuous integration, and seamless deployment strategies.",
    badges: ["DevOps", "Automation"],
    featured: false,
  },
  {
    icon: "LineChart",
    name: "Business Intelligence & Analytics",
    description:
      "Transform raw data into actionable insights with powerful analytics tools and interactive dashboards for informed decisions.",
    badges: ["Analytics", "BI"],
    featured: false,
  },
  {
    icon: "Rocket",
    name: "Digital Transformation Consulting",
    description:
      "Navigate your digital journey with strategic consulting services that modernize operations and enhance customer experiences.",
    badges: ["Consulting", "Strategy"],
    featured: false,
  },
];

const ProductListPage = () => {
  return <ProductList products={productList} />;
};

export default ProductListPage;
