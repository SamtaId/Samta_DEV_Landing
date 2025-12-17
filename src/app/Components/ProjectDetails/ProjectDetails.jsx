"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";

const ProjectDetails = ({ portfolio }) => {
    const [images, setImages] = useState([]);
    const [metadata, setMetadata] = useState({
        date: "12.12.2020",
        client: "WebSolutions",
        category: "Marketing, SEO",
        tags: "SEO, Marketing"
    });

    useEffect(() => {
        const extractedImages = [];

        const featuredImage = portfolio._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        if (featuredImage) {
            extractedImages.push(featuredImage);
        }

        if (portfolio.content?.rendered) {
            const content = portfolio.content.rendered;
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, 'text/html');

            const imgTags = doc.querySelectorAll('img');
            imgTags.forEach(img => {
                const src = img.getAttribute('src');
                if (src && !extractedImages.includes(src)) {
                    if (!src.includes('icon') && !src.includes('.svg')) {
                        extractedImages.push(src);
                    }
                }
            });

            const dateMatch = content.match(/Date:<\/p>[\s\S]*?<p class="elementor-heading-title[^"]*">([^<]+)<\/p>/);
            if (dateMatch) setMetadata(prev => ({ ...prev, date: dateMatch[1] }));

            const clientMatch = content.match(/Client:<\/p>[\s\S]*?<p class="elementor-heading-title[^"]*">([^<]+)<\/p>/);
            if (clientMatch) setMetadata(prev => ({ ...prev, client: clientMatch[1] }));

            const categoryMatch = content.match(/Category:<\/p>[\s\S]*?<p class="elementor-heading-title[^"]*">([^<]+)<\/p>/);
            if (categoryMatch) setMetadata(prev => ({ ...prev, category: categoryMatch[1] }));

            const tagsMatch = content.match(/Tags:<\/p>[\s\S]*?<p class="elementor-heading-title[^"]*">([^<]+)<\/p>/);
            if (tagsMatch) setMetadata(prev => ({ ...prev, tags: tagsMatch[1] }));
        }

        console.log('🖼️ Extracted images:', extractedImages.length);
        setImages(extractedImages);
    }, [portfolio]);

    const settings = {
        dots: true,
        infinite: images.length > 1,
        speed: 600,
        slidesToShow: Math.min(3, images.length),
        slidesToScroll: 1,
        arrows: true,
        autoplay: images.length > 1,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: Math.min(2, images.length),
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
        ],
    };

    const mainImage = portfolio._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        "/assets/images/project/projecDetailstThumb1_1.jpg";

    const getCleanText = (html) => {
        return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    };

    const description = getCleanText(portfolio.excerpt.rendered);

    return (
        <>
            <section className="project-hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="breadcrumb-custom">
                            <a href="/">Home</a>
                            <span className="separator">/</span>
                            <a href="/project">Portfolio</a>
                            <span className="separator">/</span>
                            <span className="current">{portfolio.title.rendered}</span>
                        </div>
                        <h1 className="hero-title">{portfolio.title.rendered}</h1>
                        <p className="hero-description">{description}</p>
                    </div>
                </div>
            </section>

            <section className="project-details-section">
                <div className="container">
                    {/* Main Image */}
                    <div className="main-image-container">
                        <div className="main-image-wrapper">
                            <Image
                                src={mainImage}
                                alt={portfolio.title.rendered}
                                width={1200}
                                height={600}
                                style={{ width: '100%', height: 'auto' }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Project Info Grid */}
                    <div className="project-info-grid">
                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <p className="info-label">Tanggal</p>
                                <p className="info-value">{metadata.date}</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <p className="info-label">Client</p>
                                <p className="info-value">{metadata.client}</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.5 9.75C16.1904 9.75 16.75 9.19036 16.75 8.5C16.75 7.80964 16.1904 7.25 15.5 7.25C14.8096 7.25 14.25 7.80964 14.25 8.5C14.25 9.19036 14.8096 9.75 15.5 9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="info-content">
                                <p className="info-label">Kategori</p>
                                <p className="info-value">{metadata.category}</p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    {images.length > 1 && (
                        <div className="gallery-section">
                            <div className="section-header">
                                <h2 className="section-title">Galeri Project</h2>
                                <p className="section-subtitle">
                                    Dokumentasi visual dari hasil project yang telah kami kerjakan
                                </p>
                            </div>

                            <div className="gallery-slider">
                                <Slider {...settings}>
                                    {images.map((img, index) => (
                                        <div key={index} className="gallery-slide">
                                            <div className="gallery-image">
                                                <Image
                                                    src={img}
                                                    alt={`${portfolio.title.rendered} ${index + 1}`}
                                                    width={400}
                                                    height={300}
                                                    style={{
                                                        width: '100%',
                                                        height: '280px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <div className="image-overlay">
                                                    <span className="image-number">{index + 1} / {images.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    )}

                    {/* Tags & Meta */}
                    <div className="project-footer">
                        <div className="footer-left">
                            <h3 className="footer-section-title">TAGS</h3>
                            <div className="tags-list">
                                {metadata.tags.split(',').map((tag, index) => (
                                    <span key={index} className="tag-item">
                                        {tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="footer-right">
                            <div className="meta-row">
                                <span className="meta-label">Published:</span>
                                <span className="meta-value">
                                    {new Date(portfolio.date).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                            <div className="meta-row">
                                <span className="meta-label">Last Updated:</span>
                                <span className="meta-value">
                                    {new Date(portfolio.modified).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-container">
                        <div className="cta-content">
                            <h2 className="cta-title">Tertarik Dengan Project Serupa?</h2>
                            <p className="cta-text">
                                Konsultasikan kebutuhan project Anda dengan tim profesional kami
                            </p>
                            <a href="/contact" className="cta-button">
                                <span>Hubungi Kami</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <div className="cta-decoration">
                            <div className="decoration-circle circle-1"></div>
                            <div className="decoration-circle circle-2"></div>
                            <div className="decoration-circle circle-3"></div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
        /* Hero Section */
        .project-hero {
          padding: 80px 0 40px;
          background: linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%);
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .breadcrumb-custom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
          font-size: 14px;
          color: #666;
        }

        .breadcrumb-custom a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb-custom a:hover {
          color: #C8A76B;
        }

        .breadcrumb-custom .separator {
          color: #ddd;
        }

        .breadcrumb-custom .current {
          color: #C8A76B;
          font-weight: 600;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 800;
          color: #1A1A1A;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 18px;
          color: #666;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Project Details Section */
        .project-details-section {
          padding: 60px 0;
        }

        /* Main Image */
        .main-image-container {
          margin-bottom: 60px;
        }

        .main-image-wrapper {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .main-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.05) 100%);
          pointer-events: none;
        }

        /* Project Info Grid */
        .project-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px;
          background: white;
          border-radius: 16px;
          border: 1px solid #F0F0F0;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: #C8A76B;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(200, 167, 107, 0.15);
        }

        .info-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C8A76B 0%, #D4AF37 100%);
          border-radius: 12px;
          color: white;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-label {
          font-size: 13px;
          color: #999;
          margin-bottom: 4px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: 18px;
          font-weight: 700;
          color: #1A1A1A;
          margin: 0;
        }

        /* Gallery Section */
        .gallery-section {
          margin-bottom: 80px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 800;
          color: #1A1A1A;
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .gallery-slider {
          padding: 0 40px;
        }

        .gallery-slide {
          padding: 0 12px;
        }

        .gallery-image {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
        }

        .gallery-image:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-image:hover .image-overlay {
          opacity: 1;
        }

        .image-number {
          background: rgba(255, 255, 255, 0.95);
          color: #1A1A1A;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        /* Slick Slider Styles */
        :global(.slick-slider) {
          position: relative;
        }

        :global(.slick-list) {
          margin: 0 -12px;
        }

        :global(.slick-dots) {
          bottom: -50px;
          display: flex !important;
          justify-content: center;
          gap: 8px;
          padding: 0;
          margin: 0;
        }

        :global(.slick-dots li) {
          width: 10px;
          height: 10px;
          margin: 0;
        }

        :global(.slick-dots li button) {
          width: 10px;
          height: 10px;
          padding: 0;
        }

        :global(.slick-dots li button:before) {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #DDD;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.slick-dots li.slick-active button:before) {
          width: 32px;
          border-radius: 5px;
          background: linear-gradient(90deg, #C8A76B, #D4AF37);
        }

        :global(.slick-prev),
        :global(.slick-next) {
          width: 48px;
          height: 48px;
          z-index: 10;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        :global(.slick-prev:hover),
        :global(.slick-next:hover) {
          background: white;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transform: scale(1.1);
        }

        :global(.slick-prev) {
          left: 0;
        }

        :global(.slick-next) {
          right: 0;
        }

        :global(.slick-prev:before),
        :global(.slick-next:before) {
          font-size: 20px;
          color: #C8A76B;
          opacity: 1;
        }

        :global(.slick-disabled) {
          opacity: 0.3 !important;
        }

        /* Project Footer */
.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
  padding: 48px 0;
  border-top: 1px solid #E8E8E8;
}

.footer-left {
  flex: 1;
}

.footer-right {
  flex-shrink: 0;
  min-width: 400px;
}

.footer-section-title {
  font-size: 14px;
  font-weight: 800;
  color: #1A1A1A;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-item {
  padding: 10px 24px;
  background: #F8F9FA;
  border: 1px solid #E8E8E8;
  border-radius: 24px;
  font-size: 14px;
  color: #666;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.tag-item:hover {
  background: #C8A76B;
  border-color: #C8A76B;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 167, 107, 0.3);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #F0F0F0;
}

.meta-row:last-child {
  border-bottom: none;
}

.meta-label {
  font-size: 14px;
  color: #999;
  font-weight: 600;
}

.meta-value {
  font-size: 15px;
  color: #1A1A1A;
  font-weight: 700;
  text-align: right;
}

/* Responsive */
@media (max-width: 992px) {
  .project-footer {
    flex-direction: column;
    gap: 40px;
  }

  .footer-right {
    min-width: auto;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .project-footer {
    padding: 32px 0;
  }

  .footer-section-title {
    font-size: 13px;
  }

  .tag-item {
    padding: 8px 18px;
    font-size: 13px;
  }

  .meta-row {
    padding: 12px 0;
  }

  .meta-label {
    font-size: 13px;
  }

  .meta-value {
    font-size: 14px;
  }
}

        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-container {
          position: relative;
          z-index: 1;
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }

        .cta-text {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 40px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #C8A76B 0%, #D4AF37 100%);
          color: white;
          padding: 18px 40px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(200, 167, 107, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(200, 167, 107, 0.4);
        }

        .cta-button svg {
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(4px);
        }

        .cta-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200, 167, 107, 0.15), transparent);
        }

        .circle-1 {
          width: 500px;
          height: 500px;
          top: -250px;
          right: -100px;
        }

        .circle-2 {
          width: 400px;
          height: 400px;
          bottom: -200px;
          left: -100px;
        }

        .circle-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .gallery-slider {
            padding: 0 30px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }

          .hero-description {
            font-size: 16px;
          }

          .project-info-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .section-title {
            font-size: 28px;
          }

          .gallery-slider {
            padding: 0;
          }

          :global(.slick-prev),
          :global(.slick-next) {
            width: 40px;
            height: 40px;
          }

          :global(.slick-prev) {
            left: 10px;
          }

          :global(.slick-next) {
            right: 10px;
          }

          .project-footer {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .cta-title {
            font-size: 32px;
          }

          .cta-text {
            font-size: 16px;
          }
        }
      `}</style>
        </>
    );
};

export default ProjectDetails;
