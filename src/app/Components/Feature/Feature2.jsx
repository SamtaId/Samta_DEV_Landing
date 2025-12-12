import Image from "next/image";
import Link from "next/link";

const Feature2 = () => {
  return (
    <section className="feature-section section-padding fix">
      <div className="container">
        <div className="feature-wrapper style1">
          <div className="row gy-5 gx-134">
            {/* LEFT CONTENT */}
            <div className="col-xl-6 order-2 order-xl-1">
              <div className="feature-content">
                <div className="section-title">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    Keunggulan Kami
                    <Image
                      src="/assets/images/icon/fireIcon.svg"
                      alt="img"
                      width={16}
                      height={17}
                    />
                  </div>

                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    Fitur & Layanan yang Siap Membantu Bisnis Anda Tumbuh
                  </h2>

                  <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                    Samta Dev menyediakan layanan pengembangan digital kelas
                    profesional dengan proses kerja yang terstruktur, dukungan
                    penuh, dan hasil yang dapat meningkatkan efisiensi serta
                    kredibilitas bisnis Anda.
                  </p>
                </div>

                <Link
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".2s"
                  href="/contact"
                >
                  Konsultasi Gratis
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_91_29)">
                      <path
                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_91_29">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>

            {/* RIGHT FEATURES */}
            <div className="col-xl-6 order-1 order-xl-2">
              <div className="feature-box-wrapper">
                {/* FEATURE 1 */}
                <div className="feature-box style1 child1">
                  <div
                    className="feature-box-header wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="content">
                      <h5>Website & App Development</h5>
                      <p className="text">
                        Pembuatan website, mobile app & sistem custom
                      </p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="35"
                        viewBox="0 0 34 35"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="17.5"
                          r="16"
                          stroke="#F1F1F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="feature-box-footer wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="content">
                      <span className="day">Real-time</span>
                      <span className="time">Support Available</span>
                    </div>
                    <div className="shape">
                      <Image
                        src="/assets/images/shape/featureProfileShape1_1.png"
                        alt="img"
                        width={38}
                        height={24}
                      />
                    </div>
                  </div>
                </div>

                {/* FEATURE 2 */}
                <div className="feature-box style1 child2">
                  <div
                    className="feature-box-header wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="content">
                      <h5>UI/UX Design & Branding</h5>
                      <p className="text">
                        Desain profesional untuk bisnis modern
                      </p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="35"
                        viewBox="0 0 34 35"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="17.5"
                          r="16"
                          stroke="#F1F1F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="feature-box-footer wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="content">
                      <span className="day">Creative</span>
                      <span className="time">Design Experts</span>
                    </div>
                    <div className="shape">
                      <Image
                        src="/assets/images/shape/featureProfileShape1_1.png"
                        alt="img"
                        width={38}
                        height={24}
                      />
                    </div>
                  </div>
                </div>

                {/* FEATURE 3 */}
                <div
                  className="feature-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="feature-box-header">
                    <div className="content">
                      <h5>Maintenance & Dedicated Support</h5>
                      <p className="text">
                        Pendampingan & perawatan sistem jangka panjang
                      </p>
                    </div>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="35"
                        viewBox="0 0 34 35"
                        fill="none"
                      >
                        <circle
                          cx="17"
                          cy="17.5"
                          r="16"
                          stroke="#F1F1F1"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="feature-box-footer">
                    <div className="content">
                      <span className="day">24/7</span>
                      <span className="time">Technical Support</span>
                    </div>
                    <div className="shape">
                      <Image
                        src="/assets/images/shape/featureProfileShape1_1.png"
                        alt="img"
                        width={38}
                        height={24}
                      />
                    </div>
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

export default Feature2;
