import Image from "next/image";
import Link from "next/link";

const AppShowcase = ({
  subtitle,
  title,
  content,
  features,
  btnname,
  btnurl,
  img,
}) => {
  return (
    <section className="app-showcase-section section-padding fix">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="app-showcase-content">
              <div className="section-title">
                <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                  {subtitle}{" "}
                  <Image
                    src="/assets/images/icon/fireIcon.svg"
                    alt="img"
                    width={16}
                    height={17}
                  />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                  {title}
                </h2>
                <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                  {content}
                </p>
              </div>
              {features && features.length > 0 && (
                <ul
                  className="checklist style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  {features.map((item, index) => (
                    <li key={index}>
                      <Image
                        src="/assets/images/icon/checkmarkIcon.svg"
                        alt="img"
                        width={30}
                        height={30}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {btnname && (
                <Link
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".2s"
                  href={btnurl}
                >
                  {btnname}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_18_41)">
                      <path
                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_18_41">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              )}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="app-showcase-thumb wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="app-mockup-wrapper">
                <Image
                  src={img}
                  alt="Samta Dev Mobile App"
                  width={600}
                  height={750}
                  className="app-mockup-image"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
