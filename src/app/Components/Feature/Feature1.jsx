import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle
              SubTitle="Kenapa Memilih Samta Dev"
              Title="Solusi Digital Profesional untuk Bisnis, Startup, dan Perusahaan"
            ></SectionTitle>
          </div>

          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              {/* Left column */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_1.svg"
                    title="Pengembangan Cepat & Efisien"
                    content="Kami membangun website dan aplikasi dengan proses yang cepat tanpa mengorbankan kualitas."
                  ></FeatureCard>

                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_2.svg"
                    title="Desain Modern & Responsif"
                    content="Setiap tampilan dirancang profesional, mobile-friendly, dan berfokus pada pengalaman pengguna."
                  ></FeatureCard>

                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_3.svg"
                    title="Fleksibel & Bisa Custom"
                    content="Semua fitur dapat disesuaikan sepenuhnya sesuai kebutuhan bisnis Anda."
                  ></FeatureCard>
                </div>
              </div>

              {/* Center image */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    {/* <div className="thumbShape1"></div> */}
                    <Image
                      src="/assets/images/wcu/wcuThumb1_1.png"
                      alt="img"
                      width={376}
                      height={342}
                    />
                  </div>
                  <div className="shape">
                    <Image
                    className="choose-us-image"
                      src="/assets/images/intro/introThumbShape1_2.png"
                      alt="img"
                      width={376}
                      height={377}
                    />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_4.svg"
                    title="Support & Maintenance Berkelanjutan"
                    content="Kami mendampingi Anda bahkan setelah project selesai dengan perawatan rutin dan bantuan teknis."
                  ></FeatureCard>

                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_5.svg"
                    title="Integrasi Sistem Bisnis"
                    content="Website atau aplikasi bisa dihubungkan dengan API, database, dan sistem internal perusahaan."
                  ></FeatureCard>

                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_6.svg"
                    title="Harga Transparan & Terjangkau"
                    content="Biaya jelas di awal, tanpa hidden fee, dengan kualitas premium."
                  ></FeatureCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
