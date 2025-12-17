import { notFound } from 'next/navigation';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import serviceDetailsData from '@/app/Data/serviceDetails.json';

const services = serviceDetailsData;

// Generate static params untuk semua service pages
export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata dinamis untuk SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return {
      title: 'Layanan Tidak Ditemukan',
      description: 'Layanan yang Anda cari tidak tersedia.',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [...service.tags, 'jasa', 'layanan', 'indonesia', service.title, 'Samta'],
    authors: [{ name: 'Samta' }],
    creator: 'Samta',
    publisher: 'Samta',
    
    // Open Graph
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://samta.dev/service/service-details/${slug}`,
      siteName: 'Samta',
      images: [
        {
          url: `https://samta.dev${service.mainImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: 'id_ID',
      type: 'article',
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`https://samta.dev${service.mainImage}`],
    },
    
    // Robots
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
    
    // Canonical URL
    alternates: {
      canonical: `https://samta.dev/service/service-details/${slug}`,
    },
    
    category: 'Technology Services',
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services[slug];

  // Handle 404 jika service tidak ditemukan
  if (!service) {
    notFound();
  }

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://samta.dev/service/service-details/${slug}`,
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Samta',
      url: 'https://samta.dev',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    image: `https://samta.dev${service.mainImage}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'IDR',
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
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://samta.dev/service/service-details/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
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
          Title={service.title}
        />
        <ServiceDetails service={service} />
      </div>
    </>
  );
}
