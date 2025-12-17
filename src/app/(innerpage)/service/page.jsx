import Brand3 from '@/app/Components/Brand/Brand3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta2 from '@/app/Components/Cta/Cta2';
import Services1 from '@/app/Components/Services/Services1';

// Static Metadata untuk SEO
export const metadata = {
  title: 'Layanan Kami - Website Development, Mobile Apps & Digital Solutions | Samta',
  description: 'Layanan profesional pengembangan website, aplikasi mobile, SEO, digital advertising, SaaS solutions, dan marketplace management. Transformasikan bisnis Anda dengan solusi digital terpadu.',
  keywords: [
    'jasa website development',
    'jasa mobile app development', 
    'jasa digital advertising',
    'jasa SEO Indonesia',
    'SaaS solutions',
    'marketplace management',
    'social media management',
    'creative design branding',
    'pengembangan website',
    'aplikasi mobile',
  ],
  authors: [{ name: 'Samta' }],
  creator: 'Samta',
  publisher: 'Samta',
  
  openGraph: {
    title: 'Layanan Kami - Website Development, Mobile Apps & Digital Solutions',
    description: 'Layanan profesional pengembangan website, aplikasi mobile, SEO, digital advertising, dan SaaS solutions untuk transformasi digital bisnis Anda.',
    url: 'https://samta.dev/service',
    siteName: 'Samta',
    images: [
      {
        url: 'https://samta.dev/assets/images/og-layanan.jpg',
        width: 1200,
        height: 630,
        alt: 'Layanan Digital Solutions - Samta',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Layanan Kami - Website Development, Mobile Apps & Digital Solutions',
    description: 'Layanan profesional pengembangan website, aplikasi mobile, SEO, digital advertising, dan SaaS solutions.',
    images: ['https://samta.dev/assets/images/og-layanan.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://samta.dev/service',
  },
  
  category: 'Technology Services',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://samta.dev/service',
  name: 'Samta - Layanan Digital',
  image: 'https://samta.dev/assets/images/logo.png',
  description: 'Layanan profesional pengembangan website, aplikasi mobile, SEO, digital advertising, SaaS solutions, dan marketplace management.',
  url: 'https://samta.dev/service',
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan Digital',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pengembangan Website',
          description: 'Solusi website kustom yang disesuaikan dengan kebutuhan bisnis Anda menggunakan teknologi modern dan desain responsif.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pengembangan Aplikasi Mobile',
          description: 'Aplikasi mobile native dan cross-platform yang memberikan pengalaman pengguna yang seamless di semua perangkat.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manajemen Media Sosial',
          description: 'Kampanye media sosial strategis untuk meningkatkan kehadiran brand Anda dan berinteraksi dengan target audiens.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Advertising',
          description: 'Kampanye iklan berbasis data yang memaksimalkan ROI dan menjangkau pelanggan ideal Anda secara efektif.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desain Kreatif & Branding',
          description: 'Identitas brand yang khas dan desain kreatif yang membuat bisnis Anda menonjol di pasar.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Manajemen Marketplace',
          description: 'Solusi marketplace lengkap termasuk manajemen inventori, pesanan, dan platform multi-vendor.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO',
          description: 'Strategi optimasi mesin pencari untuk meningkatkan visibilitas website dan pertumbuhan traffic organik.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Solusi SaaS',
          description: 'Platform software-as-a-service yang scalable dirancang untuk efisiensi bisnis dan transformasi digital.',
        },
      },
    ],
  },
};

// Breadcrumb Schema
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://samta.dev',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Layanan',
      item: 'https://samta.dev/service',
    },
  ],
};

const Page = () => {
  return (
    <>
      {/* JSON-LD Structured Data untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div>
        <BreadCumb
          bgimg="/assets/images/bg/breadcumgBg.png"
          Title="Layanan"
        />
        {/* <Cta2 /> */}
        <Services1 />
        {/* <Brand3 /> */}
      </div>
    </>
  );
};

export default Page;
