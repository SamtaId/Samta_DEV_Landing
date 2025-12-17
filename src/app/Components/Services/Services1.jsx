import Link from 'next/link';
import data from '../../Data/services1.json';
import Image from 'next/image';

// Mapping title ke slug
const getTitleSlug = (title) => {
  const slugMap = {
    'Pengembangan Website': 'pengembangan-website',
    'Pengembangan Aplikasi Mobile': 'pengembangan-aplikasi-mobile',
    'Manajemen Media Sosial': 'manajemen-media-sosial',
    'Digital Advertising': 'digital-advertising',
    'Desain Kreatif & Branding': 'desain-kreatif-branding',
    'Manajemen Marketplace': 'manajemen-marketplace',
    'SEO': 'seo',
    'Solusi SaaS': 'solusi-saas',
  };
  return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
};

const Services1 = () => {
  return (
    <section className="service-section section-padding fix">
      <div className="service-container-wrapper style1">
        <div className="container">
          <div className="service-wrapper style1">
            <div className="row gy-5">
              {data.map((item, index) => (
                <div key={index} className="col-xl-4 col-md-6">
                  <div className="service-box style3 wow fadeInLeft" data-wow-delay=".3s">
                    <div className="icon-box style3">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={40} 
                        height={40} 
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <Link href={`/service/service-details/${getTitleSlug(item.title)}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;
