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

      setProjects(res.data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <style jsx>{`
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
        }
      `}</style>

      <section className="project-section section-padding fix">
        <div className="container">
          <div className="row gy-4">
            {projects.map((item) => {
              const image =
                item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <div key={item.id} className="col-xl-4 col-lg-6">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="text-decoration-none"
                  >
                    <div className="project-card-modern">
                      <div className="project-image-wrapper">
                        {image && (
                          <Image
                            src={image}
                            alt={item.title.rendered}
                            className="img-fluid"
                            style={{ objectFit: 'cover' }}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                          />
                        )}
                      </div>

                      <div className="project-overlay">
                        <h3 className="project-title">{item.title.rendered}</h3>

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
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project2;
