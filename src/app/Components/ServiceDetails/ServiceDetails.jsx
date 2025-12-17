import Image from 'next/image';
import Link from 'next/link';

const ServiceDetails = ({ service }) => {
  return (
    <div className="service-details-section">
      <div className="service-details-container-wrapper section-padding fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div
              className="main-thumb img-custom-anim-right wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <Image
                src={service.mainImage}
                alt={service.title}
                width={1410}
                height={646}
                priority
              />
            </div>

            <h1 className="title wow fadeInUp" data-wow-delay=".3s">
              {service.title}
            </h1>

            <div className="tagcloud">
              {service.tags.map((tag, index) => (
                <div key={index} className="tag">
                  <Link href="#">{tag}</Link>
                </div>
              ))}
            </div>

            <div className="details-box1">
              <h2 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Gambaran Layanan
              </h2>
              <div className="row gy-3">
                <div className="col-xl-7">
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                    {service.overview.intro}
                  </p>
                </div>
                <div className="col-xl-5">
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                    {service.overview.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="details-box2">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Manfaat Layanan Kami
              </h3>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div className="feature-wrapper wow fadeInUp" data-wow-delay=".3s">
                    <ul className="feature">
                      {service.benefits
                        .slice(0, Math.ceil(service.benefits.length / 2))
                        .map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                    <ul className="feature">
                      {service.benefits
                        .slice(Math.ceil(service.benefits.length / 2))
                        .map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="col-xl-6">
                  {service.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`progress-wrap ${
                        index === service.skills.length - 1 ? 'mb-0' : ''
                      }`}
                    >
                      <div className="progress-meta">
                        <div className="title">{skill.name}</div>
                        <div className="percentage">{skill.percentage}%</div>
                      </div>
                      <div className="progress-container">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="thumb-wrapper">
                <div className="row gy-3">
                  {service.images.map((image, index) => (
                    <div key={index} className="col-xl-6">
                      <div
                        className="thumb img-custom-anim-left wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Image
                          src={image}
                          alt={`${service.title} ${index + 1}`}
                          width={690}
                          height={328}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text1 wow fadeInUp" data-wow-delay=".3s">
                {service.detailDescription1}
              </p>
              <p className="text2 wow fadeInUp" data-wow-delay=".5s">
                {service.detailDescription2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
