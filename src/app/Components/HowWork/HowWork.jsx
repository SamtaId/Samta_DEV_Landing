import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
  return (
    <section className="work-process-section section-padding fix">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto">
            <SectionTitle
              SubTitle="Proses Kerja"
              Title="Alur Kerja Samta Dev Dalam Membangun Solusi Digital Anda"
            ></SectionTitle>
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <Image
                src="/assets/images/shape/workProcessShape1_1.png"
                alt="img"
                width={1416}
                height={225}
              />
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step">STEP - 01</div>
                  <div className="title">Konsultasi & Analisa Kebutuhan</div>
                  <div className="text">
                    Kami memahami kebutuhan bisnis Anda, menentukan tujuan, dan
                    membuat gambaran awal solusi yang paling tepat.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 child2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="step">STEP - 02</div>
                  <div className="title">
                    Desain UI/UX & Pengembangan Sistem
                  </div>
                  <div className="text">
                    Kami merancang tampilan profesional lalu membangun website,
                    aplikasi, atau sistem custom sesuai standar industri.
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="step">STEP - 03</div>
                  <div className="title">Testing, Launching, & Maintenance</div>
                  <div className="text">
                    Sistem diuji menyeluruh sebelum go-live, dan kami tetap
                    mendampingi dengan support serta maintenance berkala.
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

export default HowWork;
