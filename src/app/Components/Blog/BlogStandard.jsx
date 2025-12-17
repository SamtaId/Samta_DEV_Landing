"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogService } from "@/services/blogService";

const BlogStandard = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState({
    posts: true,
    sidebar: true,
    categories: true,
  });
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      await Promise.all([fetchPosts(), fetchCategories(), fetchRecentPosts()]);
    } catch (err) {
      setError(err.message);
      console.error("Error loading blog data:", err);
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading((prev) => ({ ...prev, posts: true }));

      const result = await blogService.getPosts({
        per_page: 6,
        page: 1,
        _embed: true,
      });

      const processedPosts = result.data.map((post) => {
        let featuredImage = null;
        if (post._embedded && post._embedded["wp:featuredmedia"]) {
          featuredImage = post._embedded["wp:featuredmedia"][0];
        }

        // PERBAIKAN: Ambil semua kategori dari post
        let categories = [];
        if (post._embedded && post._embedded["wp:term"]) {
          const terms = post._embedded["wp:term"];
          if (terms[0] && terms[0].length > 0) {
            // terms[0] biasanya berisi categories
            categories = terms[0];
          }
        }

        return {
          ...post,
          featuredImageData: featuredImage,
          postCategories: categories, // Ubah nama menjadi postCategories
        };
      });

      setPosts(processedPosts);
      setLoading((prev) => ({ ...prev, posts: false }));
    } catch (err) {
      console.error("Error fetching posts:", err);
      setLoading((prev) => ({ ...prev, posts: false }));
      setPosts([]);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading((prev) => ({ ...prev, categories: true }));

      const result = await blogService.getCategories({
        per_page: 10,
        hide_empty: true, // Filter kategori yang tidak punya post
      });

      if (result && result.length > 0) {
        // Filter out "uncategorized" category
        const filteredCategories = result.filter(
          (category) => category.slug !== "uncategorized" && category.count > 0 // Hanya kategori yang memiliki post
        );

        setCategories(filteredCategories);
      } else {
        setCategories([]);
      }
      setLoading((prev) => ({ ...prev, categories: false }));
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]);
      setLoading((prev) => ({ ...prev, categories: false }));
    }
  };

  const fetchRecentPosts = async () => {
    try {
      setLoading((prev) => ({ ...prev, sidebar: true }));

      const result = await blogService.getPosts({
        per_page: 3,
        page: 1,
        _embed: true,
      });

      const processedRecent = result.data.map((post) => {
        let featuredImage = null;
        if (post._embedded && post._embedded["wp:featuredmedia"]) {
          featuredImage = post._embedded["wp:featuredmedia"][0];
        }

        return {
          ...post,
          featuredImageData: featuredImage,
        };
      });

      setRecentPosts(processedRecent);
      setLoading((prev) => ({ ...prev, sidebar: false }));
    } catch (err) {
      console.error("Error fetching recent posts:", err);
      setLoading((prev) => ({ ...prev, sidebar: false }));
      setRecentPosts([]);
    }
  };

  const getFeaturedImage = (post) => {
    if (post.featuredImageData?.source_url) {
      return post.featuredImageData.source_url;
    }

    if (post.featuredImageData?.media_details?.sizes?.medium?.source_url) {
      return post.featuredImageData.media_details.sizes.medium.source_url;
    }

    const firstCategory = post.postCategories?.[0];
    if (firstCategory?.slug) {
      return `/assets/images/blog/categories/${firstCategory.slug}.jpg`;
    }

    return "/assets/images/blog/default-blog.jpg";
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "short" };
      return {
        day: date.getDate(),
        month: date.toLocaleDateString("id-ID", { month: "short" }),
        fullDate: date.toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
    } catch (e) {
      return {
        day: "01",
        month: "Jan",
        fullDate: "1 Januari 2024",
      };
    }
  };

  const getExcerpt = (post) => {
    if (!post.excerpt?.rendered) return "";
    const text = post.excerpt.rendered
      .replace(/<[^>]*>/g, "")
      .replace(/&[^;]+;/g, "");
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  // PERBAIKAN: Fungsi untuk mendapatkan kategori pertama dari post
  const getFirstCategory = (post) => {
    if (post.postCategories && post.postCategories.length > 0) {
      const firstCategory = post.postCategories[0];
      return {
        name: firstCategory.name,
        slug: firstCategory.slug,
      };
    }
    return { name: "Development", slug: "development" };
  };

  // PERBAIKAN: Fungsi untuk mendapatkan semua kategori dari post (untuk display)
  const getAllCategories = (post) => {
    if (post.postCategories && post.postCategories.length > 0) {
      return post.postCategories;
    }
    return [];
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleRetry = () => {
    setError(null);
    setLoading({ posts: true, sidebar: true, categories: true });
    fetchInitialData();
  };

  const tags = [
    "Development",
    "Website",
    "Mobile App",
    "UI/UX",
    "Technology",
    "Digital",
    "Startup",
    "Software",
    "Programming",
    "Consulting",
  ];

  // Loading Component
  const LoadingSkeleton = () => (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="news-standard-items mb-5 bg-samta-primary"
                style={{ opacity: "0.1", borderRadius: "2%" }}
              >
                <div
                  className="news-thumb skeleton"
                  style={{ height: "300px" }}
                ></div>
                <div className="news-content mt-4">
                  <div
                    className="skeleton mb-3"
                    style={{ height: "20px", width: "200px" }}
                  ></div>
                  <div
                    className="skeleton mb-2"
                    style={{ height: "30px", width: "80%" }}
                  ></div>
                  <div
                    className="skeleton mb-2"
                    style={{ height: "20px", width: "100%" }}
                  ></div>
                  <div
                    className="skeleton mb-2"
                    style={{ height: "20px", width: "90%" }}
                  ></div>
                  <div
                    className="skeleton mt-3"
                    style={{ height: "40px", width: "150px" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="single-sidebar-widget mb-5">
                  <div
                    className="skeleton mb-3"
                    style={{ height: "24px", width: "120px" }}
                  ></div>
                  <div
                    className="skeleton"
                    style={{ height: "150px", width: "100%" }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (error) {
    return (
      <section className="news-standard fix section-padding">
        <div className="container">
          <div className="error-state text-center py-5">
            <div className="error-icon mb-4">
              <i
                className="bi bi-exclamation-triangle"
                style={{ fontSize: "48px", color: "#ff6b6b" }}
              ></i>
            </div>
            <h3 className="mb-3">Terjadi Kesalahan</h3>
            <p className="text-muted mb-4">{error}</p>
            <button className="theme-btn" onClick={handleRetry}>
              <i className="bi bi-arrow-clockwise me-2"></i>
              Coba Lagi
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (loading.posts) {
    return <LoadingSkeleton />;
  }

  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          {/* Main Content */}
          <div className="col-12 col-lg-8">
            <div className="blog-header mb-5">
              <div className="section-title">
                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                  Blog & Insight{" "}
                  <Image
                    src="/assets/images/icon/fireIcon.svg"
                    alt="fire icon"
                    width={16}
                    height={17}
                  />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                  Tips & Tutorial Seputar Development
                </h2>
                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                  Temukan insight terbaru tentang pengembangan web, mobile app,
                  UI/UX design, dan teknologi lainnya untuk bisnis Anda.
                </p>
              </div>
            </div>

            <div className="news-standard-wrapper">
              {posts.length === 0 ? (
                <div className="empty-state text-center py-5">
                  <div className="empty-icon mb-4">
                    <i
                      className="bi bi-file-earmark-text"
                      style={{ fontSize: "48px", color: "#ddd" }}
                    ></i>
                  </div>
                  <h4 className="mb-3">Belum ada artikel</h4>
                  <p className="text-muted">
                    Artikel blog akan segera tersedia.
                  </p>
                </div>
              ) : (
                posts.slice(0, 3).map((post, index) => {
                  const date = formatDate(post.date);
                  const firstCategory = getFirstCategory(post);
                  const allCategories = getAllCategories(post);

                  return (
                    <div
                      key={post.id}
                      className="news-standard-items wow fadeInUp"
                      data-wow-delay={`${(index + 2) * 0.2}s`}
                    >
                      <div className="news-thumb">
                        <div
                          className="image-container"
                          style={{ position: "relative", height: "430px" }}
                        >
                          <img
                            src={getFeaturedImage(post)}
                            alt={post.title?.rendered || "Blog post"}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "8px",
                            }}
                            loading="lazy"
                          />
                        </div>
                        <div className="post-date">
                          <h3>
                            {date.day} <br />
                            <span>{date.month}</span>
                          </h3>
                        </div>
                      </div>
                      <div className="news-content">
                        <ul className="post-meta">
                          <li>
                            <i className="bi bi-person"></i>
                            Tim Samta Dev
                          </li>
                          <li>
                            <i className="bi bi-folder"></i>
                            {/* PERBAIKAN: Tampilkan kategori pertama */}
                            {firstCategory.name}
                          </li>
                          {/* PERBAIKAN: Tampilkan semua kategori jika lebih dari 1 */}
                          {allCategories.length > 1 && (
                            <li>
                              <i className="bi bi-tags"></i>
                              {allCategories.slice(1).map((cat, idx) => (
                                <span key={cat.id}>
                                  {idx > 0 && ", "}
                                  {cat.name}
                                </span>
                              ))}
                            </li>
                          )}
                        </ul>
                        <h3 className="post-title">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title?.rendered || "Judul Artikel"}
                          </Link>
                        </h3>
                        <p className="post-excerpt">{getExcerpt(post)}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="theme-btn mt-4"
                        >
                          Baca Selengkapnya
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              {/* Search Widget */}
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="wid-title">
                  <h3>Cari Artikel</h3>
                </div>
                <div className="search-widget">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Kata kunci..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* Categories Widget - PERBAIKAN DISINI */}
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="wid-title">
                  <h3>Kategori</h3>
                </div>
                {loading.categories ? (
                  <div className="loading-categories">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="skeleton mb-2"
                        style={{ height: "20px", width: "100%" }}
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="news-widget-categories">
                    <ul>
                      {categories.length === 0 ? (
                        <li className="text-muted">Belum ada kategori</li>
                      ) : (
                        categories.map((category) => (
                          <li key={category.id}>
                            <Link href={`/blog/category/${category.slug}`}>
                              {category.name}{" "}
                              <span>({category.count || 0})</span>
                            </Link>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Recent Posts Widget */}
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="wid-title">
                  <h3>Artikel Terbaru</h3>
                </div>
                {loading.sidebar ? (
                  <div className="loading-recent">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="recent-items mb-3">
                        <div
                          className="recent-thumb skeleton"
                          style={{ width: "78px", height: "79px" }}
                        ></div>
                        <div className="recent-content">
                          <div
                            className="skeleton mb-1"
                            style={{ height: "15px", width: "100px" }}
                          ></div>
                          <div
                            className="skeleton"
                            style={{ height: "20px", width: "150px" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="recent-post-area">
                    {recentPosts.length === 0 ? (
                      <p className="text-muted">Belum ada artikel terbaru.</p>
                    ) : (
                      recentPosts.map((post) => {
                        const date = formatDate(post.date);
                        return (
                          <div key={post.id} className="recent-items">
                            <div className="recent-thumb">
                              <img
                                src={getFeaturedImage(post)}
                                alt={post.title?.rendered}
                                style={{
                                  width: "78px",
                                  height: "79px",
                                  objectFit: "cover",
                                }}
                                loading="lazy"
                              />
                            </div>
                            <div className="recent-content">
                              <ul>
                                <li>
                                  <i className="bi bi-calendar"></i>
                                  {date.fullDate}
                                </li>
                              </ul>
                              <h6>
                                <Link href={`/blog/${post.slug}`}>
                                  {post.title?.rendered?.length > 50
                                    ? post.title.rendered.substring(0, 50) +
                                      "..."
                                    : post.title?.rendered || "Judul Artikel"}
                                </Link>
                              </h6>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>

              {/* Tags Widget */}
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="wid-title">
                  <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                  <div className="tagcloud">
                    {tags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Widget */}
              <div
                className="single-sidebar-widget wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="cta-widget">
                  <h4>Butuh Konsultasi?</h4>
                  <p>Tim Samta Dev siap membantu project digital Anda.</p>
                  <Link href="/contact" className="theme-btn">
                    Hubungi Kami
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStandard;
