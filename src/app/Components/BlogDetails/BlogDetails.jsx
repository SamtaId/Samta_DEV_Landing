"use client";
import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogService } from "@/services/blogService";

const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadBackgroudImages();
    if (slug) {
      fetchBlogDetails();
      fetchRelatedData();
    }
  }, [slug]);

  const fetchBlogDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch post by slug
      const result = await blogService.getPosts({
        slug: slug,
        _embed: true,
      });

      if (result.data && result.data.length > 0) {
        const postData = result.data[0];

        // Process categories
        let postCategories = [];
        if (postData._embedded && postData._embedded["wp:term"]) {
          const terms = postData._embedded["wp:term"];
          if (terms[0] && terms[0].length > 0) {
            postCategories = terms[0];
          }
        }

        // Process featured image
        let featuredImage = null;
        if (postData._embedded && postData._embedded["wp:featuredmedia"]) {
          featuredImage = postData._embedded["wp:featuredmedia"][0];
        }

        setPost({
          ...postData,
          postCategories,
          featuredImageData: featuredImage,
        });

        // Fetch comments for this post
        fetchComments(postData.id);
      } else {
        setError("Artikel tidak ditemukan");
      }
    } catch (err) {
      console.error("Error fetching blog details:", err);
      setError(err.message || "Terjadi kesalahan saat memuat artikel");
    } finally {
      setLoading(false);
    }
  };

//   const fetchComments = async (postId) => {
//     try {
//       const result = await blogService.getComments(postId);
//       setComments(result.data || []);
//     } catch (err) {
//       console.error("Error fetching comments:", err);
//       setComments([]);
//     }
//   };

  const fetchRelatedData = async () => {
    try {
      // Fetch recent posts
      const recentResult = await blogService.getPosts({
        per_page: 3,
        page: 1,
        _embed: true,
      });

      const processedRecent = recentResult.data.map((post) => {
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

      // Fetch categories
      const categoriesResult = await blogService.getCategories({
        per_page: 10,
        hide_empty: true,
      });

      if (categoriesResult && categoriesResult.length > 0) {
        const filteredCategories = categoriesResult.filter(
          (category) => category.slug !== "uncategorized" && category.count > 0
        );
        setCategories(filteredCategories);
      }
    } catch (err) {
      console.error("Error fetching related data:", err);
    }
  };

  const getFeaturedImage = (post) => {
    if (!post) return "/assets/images/blog/default-blog.jpg";

    if (post.featuredImageData?.source_url) {
      return post.featuredImageData.source_url;
    }
    if (post.featuredImageData?.media_details?.sizes?.large?.source_url) {
      return post.featuredImageData.media_details.sizes.large.source_url;
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

  const getContentImages = () => {
    // Extract images from post content for gallery
    const images = [];
    if (post?.content?.rendered) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content.rendered, "text/html");
      const imgElements = doc.querySelectorAll("img");

      imgElements.forEach((img) => {
        if (img.src) {
          images.push(img.src);
        }
      });
    }

    // Return only first 2 images for gallery, or use fallback
    if (images.length >= 2) {
      return images.slice(0, 2);
    }

    // Fallback images jika tidak ada gambar di konten
    return [
      "/assets/images/blog/blogCardThumb3_2.png",
      "/assets/images/blog/blogCardThumb3_3.png",
    ];
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch (e) {
      return "1 Januari 2024";
    }
  };

  const getExcerpt = (text, maxLength = 100) => {
    if (!text) return "";
    const plainText = text.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, "");
    return plainText.length > maxLength
      ? plainText.substring(0, maxLength) + "..."
      : plainText;
  };

  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, "");
  };

  const renderContent = () => {
    if (!post?.content?.rendered) return null;

    return (
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    // Implement comment submission here
    console.log("Submitting comment...");
  };

  // Tags sesuai tema Samta Dev
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

  if (loading) {
    return (
      <section className="news-standard section-padding fix">
        <div className="container">
          <div className="news-details-area">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details">
                  {/* Loading Skeleton */}
                  <div className="single-blog-post">
                    <div
                      className="skeleton"
                      style={{ height: "500px", width: "100%" }}
                    ></div>
                    <div className="post-content mt-4">
                      <div
                        className="skeleton mb-2"
                        style={{ height: "20px", width: "200px" }}
                      ></div>
                      <div
                        className="skeleton mb-2"
                        style={{ height: "30px", width: "70%" }}
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
                        className="skeleton mb-2"
                        style={{ height: "20px", width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>
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
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="news-standard section-padding fix">
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
            <Link href="/blog" className="theme-btn">
              <i className="bi bi-arrow-left me-2"></i>
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="news-standard section-padding fix">
        <div className="container">
          <div className="empty-state text-center py-5">
            <div className="empty-icon mb-4">
              <i
                className="bi bi-file-earmark-text"
                style={{ fontSize: "48px", color: "#ddd" }}
              ></i>
            </div>
            <h4 className="mb-3">Artikel tidak ditemukan</h4>
            <p className="text-muted mb-4">
              Artikel yang Anda cari tidak tersedia.
            </p>
            <Link href="/blog" className="theme-btn">
              <i className="bi bi-arrow-left me-2"></i>
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const contentImages = getContentImages();
  const postDate = formatDate(post.date);
  const postCategories = post.postCategories || [];
  const postTags = tags; // Anda bisa mengambil tags dari API jika tersedia

  return (
    <section className="news-standard section-padding fix">
      <div className="container">
        <div className="news-details-area">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details">
                <div className="single-blog-post">
                  <div className="post-featured-thumb">
                    <img
                      src={getFeaturedImage(post)}
                      alt={post.title?.rendered || "Blog post"}
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="post-content">
                    <ul
                      className="post-list d-flex align-items-center wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <li>
                        <i className="bi bi-person"></i>
                        Tim Samta Dev
                      </li>
                      <li>
                        <i className="bi bi-calendar"></i>
                        {postDate}
                      </li>
                      {postCategories.length > 0 && (
                        <li>
                          <Image
                            src="/assets/images/icon/tagIcon.png"
                            alt="category"
                            width={20}
                            height={20}
                          />
                          {postCategories[0].name}
                        </li>
                      )}
                    </ul>
                    <h1 className="wow fadeInUp" data-wow-delay=".4s">
                      {post.title?.rendered || "Judul Artikel"}
                    </h1>

                    {/* Render content from WordPress */}
                    {renderContent()}

                    {/* Gallery Images */}
                    {contentImages.length > 0 && (
                      <div
                        className="row g-4 wow fadeInUp mt-4 mb-5"
                        data-wow-delay="1s"
                      >
                        {contentImages.map((imgSrc, index) => (
                          <div key={index} className="col-lg-6">
                            <div className="details-image">
                              <img
                                src={imgSrc}
                                alt={`Gallery ${index + 1}`}
                                style={{
                                  width: "100%",
                                  height: "256px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags and Share */}
                    <div
                      className="row tag-share-wrap mt-4 mb-30 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <div className="col-lg-8 col-12">
                        <div className="tagcloud">
                          <h6 className="d-inline me-2">Tags: </h6>
                          {postTags.slice(0, 3).map((tag, index) => (
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
                      <div
                        className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
                        data-wow-delay="1.2s"
                      >
                        <div className="social-share">
                          <span className="me-3">Share:</span>
                          <a href="#">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-linkedin"></i>
                          </a>
                          <a href="#">
                            <i className="bi bi-pinterest"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div
                  className="comments-area wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="comments-heading">
                    <h3>{comments.length} Komentar</h3>
                  </div>
                  {comments.length === 0 ? (
                    <p className="text-muted py-4">
                      Belum ada komentar. Jadilah yang pertama berkomentar!
                    </p>
                  ) : (
                    comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="blog-single-comment d-flex gap-4 pt-30 pb-30"
                      >
                        <div className="image">
                          <div
                            style={{
                              width: "96px",
                              height: "96px",
                              borderRadius: "50%",
                              backgroundColor: "#f0f0f0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i
                              className="bi bi-person"
                              style={{ fontSize: "36px", color: "#999" }}
                            ></i>
                          </div>
                        </div>
                        <div className="content">
                          <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                            <div className="con">
                              <h5>{comment.author_name || "Anonymous"}</h5>
                              <span>{formatDate(comment.date)}</span>
                            </div>
                            <div className="btn">
                              <a href="#" className="reply">
                                Reply
                              </a>
                            </div>
                          </div>
                          <p className="mt-10 mb-0">
                            {stripHtmlTags(comment.content.rendered)}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Comment Form */}
                <div
                  className="comment-form-wrap pt-5 wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <h3>Tinggalkan Komentar</h3>
                  <form id="contact-form" onSubmit={handleCommentSubmit}>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nama Anda"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email2"
                            placeholder="Email Anda"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Tulis Komentar"
                            rows="5"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Kirim Komentar
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
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
                    <form action="#">
                      <input type="text" placeholder="Cari disini..." />
                      <button type="submit">
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Categories Widget */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="wid-title">
                    <h3>Kategori</h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {categories.length === 0 ? (
                        <li className="text-muted">Belum ada kategori</li>
                      ) : (
                        categories.slice(0, 5).map((category) => (
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
                </div>

                {/* Recent Posts Widget */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="wid-title">
                    <h3>Artikel Terbaru</h3>
                  </div>
                  <div className="recent-post-area">
                    {recentPosts.length === 0 ? (
                      <p className="text-muted">Belum ada artikel terbaru</p>
                    ) : (
                      recentPosts.map((recentPost) => (
                        <div key={recentPost.id} className="recent-items">
                          <div className="recent-thumb">
                            <img
                              src={getFeaturedImage(recentPost)}
                              alt={recentPost.title?.rendered}
                              style={{
                                width: "78px",
                                height: "79px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="recent-content">
                            <ul>
                              <li>
                                <i className="bi bi-calendar"></i>
                                {formatDate(recentPost.date)}
                              </li>
                            </ul>
                            <h6>
                              <Link href={`/blog/${recentPost.slug}`}>
                                {getExcerpt(recentPost.title?.rendered, 50)}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Tags Widget */}
                <div
                  className="single-sidebar-widget wow fadeInUp"
                  data-wow-delay=".9s"
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
      </div>
    </section>
  );
};

export default BlogDetails;
