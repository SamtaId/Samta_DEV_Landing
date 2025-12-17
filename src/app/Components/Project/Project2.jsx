"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { portfoliosService } from "@/services/portofolioService";

const Project2 = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await portfoliosService.getPosts({
        per_page: 3,
        page: 1,
        _embed: true,
      });

      console.log('📦 Fetched projects:', res.data); // Debug
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data");
    } finally {
      setLoading(false);
    }
  };

  // Loading Skeleton Component
  const ProjectSkeleton = () => (
    <div className="col-xl-4 col-lg-6">
      <div className="project-card-modern skeleton-card">
        <div className="skeleton-image"></div>
        <div className="project-overlay">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );

  // Error Component
  const ErrorState = () => (
    <div className="col-12">
      <div className="error-state">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="#dc3545" strokeWidth="2" />
          <path
            d="M12 8V12M12 16H12.01"
            stroke="#dc3545"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <h3>Oops! Terjadi Kesalahan</h3>
        <p>{error}</p>
        <button onClick={fetchProjects} className="retry-button">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.84871 2 11.5 2.82183 12.6056 4.125"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 2V4.5H9.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Coba Lagi
        </button>
      </div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        /* Project Card Styles */
        .project-card-modern {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          aspect-ratio: 4/3;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .project-image-wrapper {
          position: absolute;
          inset: 0;
          transition: transform 0.5s ease;
        }

        .project-card-modern:hover .project-image-wrapper {
          transform: scale(1.1);
        }

        .project-image-wrapper img {
          object-fit: cover;
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.5) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .project-card-modern:hover .project-overlay {
          opacity: 1;
        }

        .project-title {
          color: white;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
          transform: translateY(20px);
          transition: transform 0.4s ease 0.1s;
          text-decoration: none;
        }

        .project-card-modern:hover .project-title {
          transform: translateY(0);
        }

        .project-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          line-height: 1.6;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease 0.2s;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-card-modern:hover .project-description {
          transform: translateY(0);
          opacity: 1;
        }

        .project-description p {
          margin: 0;
        }

        .view-project-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          padding: 10px 20px;
          background: white;
          color: #333;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease 0.3s;
          width: fit-content;
        }

        .project-card-modern:hover .view-project-btn {
          transform: translateY(0);
          opacity: 1;
        }

        .view-project-btn:hover {
          background: #f0f0f0;
          transform: translateX(4px) translateY(0);
        }

        /* Skeleton Loading Styles */
        .skeleton-card {
          background: #f0f0f0;
          cursor: default;
        }

        .skeleton-card:hover {
          transform: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .skeleton-image {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #e0e0e0 25%,
            #f0f0f0 50%,
            #e0e0e0 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        .skeleton-card .project-overlay {
          opacity: 1;
          background: linear-gradient(
            to top,
            rgba(240, 240, 240, 0.95) 0%,
            rgba(240, 240, 240, 0.5) 50%,
            rgba(240, 240, 240, 0) 100%
          );
        }

        .skeleton-title {
          width: 70%;
          height: 24px;
          background: #d0d0d0;
          border-radius: 4px;
          margin-bottom: 12px;
          animation: shimmer 1.5s infinite;
          background: linear-gradient(90deg, #d0d0d0 25%, #e0e0e0 50%, #d0d0d0 75%);
          background-size: 200% 100%;
        }

        .skeleton-text {
          width: 100%;
          height: 14px;
          background: #d0d0d0;
          border-radius: 4px;
          margin-bottom: 8px;
          animation: shimmer 1.5s infinite;
          background: linear-gradient(90deg, #d0d0d0 25%, #e0e0e0 50%, #d0d0d0 75%);
          background-size: 200% 100%;
        }

        .skeleton-text.short {
          width: 60%;
        }

        .skeleton-button {
          width: 120px;
          height: 40px;
          background: #d0d0d0;
          border-radius: 8px;
          margin-top: 8px;
          animation: shimmer 1.5s infinite;
          background: linear-gradient(90deg, #d0d0d0 25%, #e0e0e0 50%, #d0d0d0 75%);
          background-size: 200% 100%;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Error State Styles */
        .error-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }

        .error-state svg {
          margin-bottom: 24px;
          animation: shake 0.5s ease-in-out;
        }

        .error-state h3 {
          font-size: 24px;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
        }

        .error-state p {
          font-size: 16px;
          color: #666;
          margin-bottom: 24px;
        }

        .retry-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .retry-button:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .retry-button:active {
          transform: translateY(0);
        }

        .retry-button svg {
          animation: rotate 1s ease-in-out;
        }

        .retry-button:hover svg {
          animation: rotate 1s ease-in-out infinite;
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .project-overlay {
            opacity: 1;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.85) 0%,
              rgba(0, 0, 0, 0.3) 50%,
              rgba(0, 0, 0, 0) 100%
            );
          }

          .project-title,
          .project-description,
          .view-project-btn {
            transform: translateY(0);
            opacity: 1;
          }

          .project-description {
            -webkit-line-clamp: 2;
          }

          .skeleton-card .project-overlay {
            opacity: 1;
          }
        }
      `}</style>

      <section className="project-section section-padding fix">
        <div className="container">
          <div className="row gy-4">
            {loading ? (
              <>
                <ProjectSkeleton />
                <ProjectSkeleton />
                <ProjectSkeleton />
              </>
            ) : error ? (
              <ErrorState />
            ) : projects.length === 0 ? (
              <div className="col-12">
                <div className="error-state">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      stroke="#999"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 12H16M12 8V16"
                      stroke="#999"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <h3>Belum Ada Projek</h3>
                  <p>Projek akan segera ditampilkan di sini.</p>
                </div>
              </div>
            ) : (
              projects.map((item) => {
                const image =
                  item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                // Log setiap project untuk debug
                console.log('🔗 Project card:', {
                  id: item.id,
                  title: item.title.rendered,
                  slug: item.slug,
                  url: `/project/project-details/${item.slug}`
                });

                return (
                  <div key={item.id} className="col-xl-4 col-lg-6">
                    <Link
                      href={`/project/project-details/${item.slug}`}
                      className="text-decoration-none"
                    >
                      <div className="project-card-modern">
                        <div className="project-image-wrapper">
                          {image && (
                            <Image
                              src={image}
                              alt={item.title.rendered}
                              className="img-fluid"
                              style={{ objectFit: "cover" }}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={false}
                            />
                          )}
                        </div>

                        <div className="project-overlay">
                          <h3 className="project-title">
                            {item.title.rendered}
                          </h3>

                          <div
                            className="project-description"
                            dangerouslySetInnerHTML={{
                              __html: item.excerpt.rendered,
                            }}
                          />

                          <span className="view-project-btn">
                            Lihat Detail
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 12L10 8L6 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project2;
