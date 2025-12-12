"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogService } from "@/services/blogService";

const Blog1 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const result = await blogService.getPosts({
        per_page: 3,
        page: 1,
      });

      // Fetch additional data for each post
      const postsWithData = await Promise.all(
        result.data.map(async (post) => {
          let featuredImage = null;
          let category = null;

          // Fetch featured image if exists
          if (post.featured_media && post.featured_media !== 0) {
            featuredImage = await blogService.getFeaturedMedia(
              post.featured_media
            );
          }

          // Fetch first category if exists
          if (post.categories && post.categories.length > 0) {
            category = await blogService.getCategory(post.categories[0]);
          }

          return {
            ...post,
            featuredImageData: featuredImage,
            categoryData: category,
          };
        })
      );

      setPosts(postsWithData);
    } catch (err) {
      setError(err.message);
      console.error("Error loading posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function untuk extract featured image
  const getFeaturedImage = (post) => {
    if (post.featuredImageData?.source_url) {
      return post.featuredImageData.source_url;
    }
    // Fallback image
    return "/assets/images/blog/blogThumb1_1.jpg";
  };

  // Helper function untuk format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Helper function untuk extract excerpt (remove HTML tags)
  const getExcerpt = (post) => {
    if (!post.excerpt?.rendered) return "";
    const excerpt = post.excerpt.rendered;
    // Remove HTML tags
    const text = excerpt.replace(/<[^>]*>/g, "");
    // Limit to 100 characters
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
  };

  // Helper function untuk get category name
  const getCategoryName = (post) => {
    return post.categoryData?.name || "Technology";
  };

  if (loading) {
    return (
      <section className="blog-section section-padding fix">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog-section section-padding fix">
        <div className="container">
          <div className="text-center text-danger">
            <p>Error loading posts: {error}</p>
            <button className="btn btn-primary mt-3" onClick={fetchPosts}>
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-section section-padding fix">
      <div className="container">
        <div className="blog-wrapper style1">
          <div className="section-title text-center mxw-685 mx-auto">
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
              Tips, Tutorial & Insight Seputar Development
            </h2>
          </div>

          <div className="row gy-5">
            {posts.length === 0 ? (
              <div className="col-12 text-center">
                <p>No blog posts available.</p>
              </div>
            ) : (
              posts.map((post, index) => (
                <div key={post.id} className="col-xl-4 col-md-6">
                  <div
                    className="blog-card style1 wow fadeInUp"
                    data-wow-delay={`.${(index + 1) * 2}s`}
                  >
                    <div className="thumb">
                      <img
                        src={getFeaturedImage(post)}
                        alt={post.title?.rendered || "Blog post"}
                        width={326}
                        height={219}
                        style={{
                          width: "100%",
                          height: "219px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="body">
                      <div className="tag-meta">
                        <Image
                          src="/assets/images/icon/FolderIcon.svg"
                          alt="category"
                          width={16}
                          height={12}
                        />
                        {getCategoryName(post)}
                      </div>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title?.rendered}
                        </Link>
                      </h3>
                      <div className="blog-meta">
                        <div className="item child1">
                          <span className="icon">
                            <Image
                              src="/assets/images/icon/userIcon.svg"
                              alt="author"
                              width={14}
                              height={16}
                            />
                          </span>
                          <span className="text">Samta Dev Team</span>
                        </div>
                        <div className="item">
                          <span className="icon">
                            <Image
                              src="/assets/images/icon/calendar.svg"
                              alt="date"
                              width={15}
                              height={16}
                            />
                          </span>
                          <span className="text">{formatDate(post.date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog1;
