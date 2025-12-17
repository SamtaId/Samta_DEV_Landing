import { notFound } from 'next/navigation';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetails from '@/app/Components/ProjectDetails/ProjectDetails';

// ✅ Force dynamic - PENTING!
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// Fetch portfolio by slug - dengan direct fetch (bypass service)
async function getPortfolioBySlug(slug) {
  const apiUrl = `https://ild.co.id/samta/wp-json/wp/v2/portfolios?slug=${slug}&_embed=true&_=${Date.now()}`;
  
  console.log('🌐 Fetching:', apiUrl);
  
  try {
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      console.error('❌ API Response not OK:', response.status);
      return null;
    }

    const data = await response.json();
    
    console.log('📦 API Response:', data.length, 'items');
    if (data.length > 0) {
      console.log('✅ Found:', data[0].id, '-', data[0].title.rendered);
    }
    
    return data;
  } catch (error) {
    console.error('💥 Fetch error:', error);
    return null;
  }
}

// Generate metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const data = await getPortfolioBySlug(slug);
  
  if (!data || data.length === 0) {
    return {
      title: 'Portfolio Tidak Ditemukan',
    };
  }

  const portfolio = data[0];
  const description = portfolio.excerpt.rendered
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim()
    .substring(0, 160);

  return {
    title: `${portfolio.title.rendered} - Portfolio Samta`,
    description: description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  console.log('\n🎯 ========================================');
  console.log('🎯 Rendering Project Detail Page');
  console.log('🎯 Slug:', slug);
  console.log('🎯 Time:', new Date().toISOString());
  console.log('🎯 ========================================\n');

  const data = await getPortfolioBySlug(slug);

  if (!data || data.length === 0) {
    console.log('❌ Portfolio not found for slug:', slug);
    notFound();
  }

  const portfolio = data[0];

  console.log('✅ Portfolio loaded:');
  console.log('   ID:', portfolio.id);
  console.log('   Title:', portfolio.title.rendered);
  console.log('   Slug:', portfolio.slug);
  console.log('\n');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://samta.dev/portfolio/${slug}`,
    name: portfolio.title.rendered,
    description: portfolio.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    creator: {
      '@type': 'Organization',
      name: 'Samta',
      url: 'https://samta.dev',
    },
    datePublished: portfolio.date,
    dateModified: portfolio.modified,
    image: portfolio._embedded?.['wp:featuredmedia']?.[0]?.source_url,
  };

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
        name: 'Portfolio',
        item: 'https://samta.dev/portfolio',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: portfolio.title.rendered,
        item: `https://samta.dev/portfolio/${slug}`,
      },
    ],
  };

  return (
    <>
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
          Title={portfolio.title.rendered}
        />
        <ProjectDetails portfolio={portfolio} />
      </div>
    </>
  );
}
