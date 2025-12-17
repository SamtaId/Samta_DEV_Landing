import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-section position-relative">
      <div className="footer-widgets-wrapper style1 fix">
        <div className="shape1">
          <img src="/assets/images/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/assets/images/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/assets/images/shape/footerShape1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/logo.svg"
                      alt="Samta Dev"
                      width={177}
                      height={54}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Samta Dev adalah partner terpercaya untuk solusi digital
                    profesional. Kami membantu bisnis tumbuh dengan teknologi
                    modern, desain berkualitas, dan dukungan jangka panjang.
                  </p>
                  <div className="store-links">
                    <div className="apple">
                      <Link href="/project">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Projek
                      </Link>
                    </div>
                    <div className="play">
                      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12.02 2C6.49 2 2 6.49 2 12C2 13.54 2.38 15 3.06 16.28L2 22L7.72 20.94C8.99 21.62 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12.02 2Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.45 15.18C17.22 15.91 16.24 16.53 15.45 16.69C15.01 16.78 14.43 16.85 12.6 16.05C10.31 15.08 8.87 12.71 8.76 12.56C8.65 12.41 7.84 11.32 7.84 10.19C7.84 9.06 8.43 8.51 8.66 8.27C8.89 8.03 9.17 7.97 9.35 7.97C9.53 7.97 9.71 7.97 9.86 7.98C10.02 7.99 10.23 7.93 10.43 8.44C10.64 8.95 11.14 10.08 11.2 10.22C11.26 10.36 11.31 10.53 11.22 10.68C11.13 10.83 11.08 10.93 10.97 11.06C10.86 11.19 10.74 11.35 10.64 11.45C10.53 11.56 10.42 11.68 10.55 11.91C10.68 12.14 11.13 12.89 11.78 13.47C12.61 14.2 13.29 14.42 13.54 14.53C13.79 14.64 13.92 14.62 14.05 14.47C14.18 14.32 14.62 13.82 14.77 13.59C14.92 13.36 15.07 13.4 15.3 13.49C15.53 13.58 16.65 14.13 16.9 14.26C17.15 14.39 17.32 14.45 17.38 14.56C17.44 14.67 17.44 15.18 17.45 15.18Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Halaman</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">Tentang Kami</Link>
                  </li>
                  <li>
                    <Link href="/service">Layanan</Link>
                  </li>
                  <li>
                    <Link href="/team">Tim</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Harga</Link>
                  </li>
                  <li>
                    <Link href="/project">Projek</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Kontak</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Layanan</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="/service">Pengembangan Website</Link>
                  </li>
                  <li>
                    <Link href="/service">Pengembangan Aplikasi Mobile</Link>
                  </li>
                  <li>
                    <Link href="/service">Manajemen Media Sosial</Link>
                  </li>
                  <li>
                    <Link href="/service">Digital Advertising</Link>
                  </li>
                  <li>
                    <Link href="/service">Desain Kreatif & Branding</Link>
                  </li>
                  <li>
                    <Link href="/service">Manajemen Marketplace</Link>
                  </li>
                  <li>
                    <Link href="/service">SEO</Link>
                  </li>
                  <li>
                    <Link href="/service">Solusi SaaS</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="contact-box">
                  <div className="subtitle">Hubungi Kami</div>
                  <div className="widget-head">Siap Memulai Project?</div>
                  <div className="text">
                    Konsultasi gratis untuk membahas kebutuhan digital bisnis
                    Anda. Tim kami siap membantu.
                  </div>
                  <div className="info">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199 20.1667 6.00033V17.0003C20.1667 18.0087 19.3417 18.8337 18.3334 18.8337H3.66671C2.65837 18.8337 1.83337 18.0087 1.83337 17.0003V6.00033C1.83337 4.99199 2.65837 4.16699 3.66671 4.16699Z"
                          stroke="#5236FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.1667 6L11 12.4167L1.83337 6"
                          stroke="#5236FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="link">
                      <a href="mailto:hi@samta.dev">hi@samta.dev</a>
                      <br />
                      <a href="mailto:support@samta.dev">support@samta.dev</a>
                    </div>
                  </div>
                  <div className="info">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2011_91)">
                          <path
                            d="M13.7959 5.08366C14.6912 5.25834 15.514 5.69623 16.1591 6.34127C16.8041 6.9863 17.242 7.80915 17.4167 8.70449L13.7959 5.08366ZM13.7959 1.41699C15.656 1.62364 17.3906 2.45665 18.7149 3.77925C20.0392 5.10185 20.8744 6.83542 21.0834 8.69533L13.7959 1.41699ZM20.1667 16.0103V18.7603C20.1677 19.0156 20.1154 19.2683 20.0132 19.5022C19.9109 19.7361 19.7609 19.9461 19.5728 20.1187C19.3846 20.2913 19.1625 20.4227 18.9207 20.5045C18.6789 20.5863 18.4226 20.6166 18.1684 20.5937C15.3476 20.2872 12.6381 19.3233 10.2575 17.7795C8.0427 16.3721 6.16491 14.4943 4.75752 12.2795C3.20833 9.8881 2.24424 7.1654 1.94335 4.33199C1.92045 4.0785 1.95057 3.82302 2.03181 3.58181C2.11305 3.34061 2.24363 3.11896 2.41522 2.93098C2.58682 2.743 2.79567 2.59281 3.0285 2.48997C3.26132 2.38713 3.513 2.3339 3.76752 2.33366H6.51752C6.96238 2.32928 7.39366 2.48681 7.73097 2.7769C8.06827 3.06698 8.28859 3.46982 8.35085 3.91033C8.46692 4.79039 8.68218 5.65449 8.99252 6.48616C9.11585 6.81426 9.14254 7.17083 9.06943 7.51363C8.99632 7.85643 8.82648 8.17109 8.58002 8.42033L7.41585 9.58449C8.72078 11.8794 10.6209 13.7796 12.9159 15.0845L14.08 13.9203C14.3293 13.6739 14.6439 13.504 14.9867 13.4309C15.3295 13.3578 15.6861 13.3845 16.0142 13.5078C16.8459 13.8182 17.71 14.0334 18.59 14.1495C19.0353 14.2123 19.442 14.4366 19.7327 14.7797C20.0234 15.1228 20.1778 15.5608 20.1667 16.0103Z"
                            stroke="#5236FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2011_91">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="link">
                      <a href="tel:+6281234567890">+62 813 1122 718</a>
                      <br />
                      <a href="https://wa.me/628131122718" target="_blank" rel="noopener noreferrer">
                        WhatsApp Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="footer-bottom style1">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              Copyright © 2025 Samta Dev. All Rights Reserved
            </p>
            <ul className="social-links" data-wow-delay=".5s">
              <li>
                {" "}
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
