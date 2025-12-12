import React from "react";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Brand1 from "../Components/Brand/Brand1";
import HowWork from "../Components/HowWork/HowWork";
import Choose1 from "../Components/Choose/Choose1";
import Feature1 from "../Components/Feature/Feature1";
import Counter1 from "../Components/Counter/Counter1";
import Faq1 from "../Components/Faq/Faq1";
import Testimonial from "../Components/Testimonial/Testimonial";
import Feature2 from "../Components/Feature/Feature2";
import Pricing1 from "../Components/Pricing/Pricing1";
import Cta1 from "../Components/Cta/Cta1";
import Blog1 from "../Components/Blog/Blog1";
import About4 from "../Components/About/About4";

const page = () => {
  return (
    <div>
      <HeroBanner1
        subtitle="<span>New!</span> Solusi Digital untuk Bisnis Anda"
        title="Bangun Website, Aplikasi, dan Sistem Bisnis yang Profesional Bersama Samta Dev."
        content="Samta Dev menyediakan layanan pengembangan landing page, website perusahaan, aplikasi mobile, sistem custom, hingga maintenance. Semua dibuat dengan standar profesional, scalable, dan siap membantu bisnis Anda tumbuh lebih cepat."
        btnname="Mulai Sekarang"
        btnurl="/contact"
        btntwo="Lihat Layanan"
        btn2url="/services"
        img="/assets/images/intro/into.png"
      />
      <Brand1></Brand1>
      <About4
        img1="/assets/images/about/aboutThumb1_1.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="Tentang Samta Dev"
        title="Kami Membangun Solusi Digital yang Cepat, Aman, dan Berkualitas"
        content="Samta Dev adalah tim pengembang yang berpengalaman dalam membangun website, aplikasi mobile, dan sistem custom untuk berbagai kebutuhan bisnis. Kami fokus pada kualitas, performa, dan hasil akhir yang memberikan dampak nyata."
        FeatureList={[
          "Teknologi modern & standar industri terbaru.",
          "Dukungan dan maintenance yang cepat & responsif.",
          "Solusi custom yang disesuaikan dengan kebutuhan bisnis Anda.",
        ]}
        btnname="Pelajari Lebih Lanjut"
        btnurl="/about"
      />

      <HowWork></HowWork>
      <Choose1
        subtitle="Kenapa Memilih Kami?"
        title="Layanan Profesional untuk Kebutuhan Digital Anda"
        content="Samta Dev memberikan solusi digital yang dirancang untuk membantu bisnis Anda berkembang. Mulai dari desain modern, performa cepat, keamanan tinggi, hingga dukungan jangka panjang."
        FeatureList={["Desain Profesional & Mobile-Friendly", "Optimasi SEO"]}
        FeatureList2={[
          "Keamanan Sistem Terjamin",
          "Akses Cloud & Teknologi Modern",
        ]}
        btnname="Lihat Portfolio"
        btnurl="/portfolio"
      />
      <Feature1></Feature1>
      <Counter1></Counter1>
      <Faq1></Faq1>
      <Testimonial></Testimonial>
      <Feature2></Feature2>
      <Pricing1></Pricing1>
      <Cta1
        subtitle="Mulai Bersama Kami"
        title="Ingin bangun website atau aplikasi? Konsultasi gratis sekarang!"
        content="Samta Dev siap membantu Anda membangun solusi digital yang cepat, modern, dan dapat dikembangkan untuk kebutuhan bisnis jangka panjang."
        btnurl1="/contact"
        btnurl2="/services"
        img="/assets/images/cta/ctaThumb1_1.png"
      />

      <Blog1></Blog1>
    </div>
  );
};

export default page;
