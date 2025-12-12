"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing1 = () => {
  const [isActive, setIsActive] = useState("monthly");

  return (
    <section className="pricing-section section-padding pt-4 fix">
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <div className="subtitle">
            Harga Layanan{" "}
            <Image
              src="/assets/images/icon/fireIcon.svg"
              alt="img"
              width={16}
              height={17}
            />
          </div>
          <h2 className="title">
            Paket Layanan yang Fleksibel untuk Kebutuhan Bisnis Anda
          </h2>
          <p className="text">
            Pilih paket pengembangan aplikasi, website, atau sistem sesuai
            kebutuhan bisnis Anda. Semua paket bisa disesuaikan (custom).
          </p>
        </div>

        <div className="pricing-wrapper style1">
          <div className="tab-section d-flex justify-content-center align-items-center">
            <ul className="nav nav-pills mb-3">
              <li
                className={`nav-item ${isActive === "monthly" ? "active" : ""}`}
                onClick={() => setIsActive("monthly")}
              >
                <button className={`nav-link ${isActive === "monthly" ? "active" : ""}`} type="button">
                  Bulanan
                </button>
              </li>

              <li
                className={`nav-item ${isActive === "yearly" ? "active" : ""}`}
                onClick={() => setIsActive("yearly")}
              >
                <button className={`nav-link ${isActive === "yearly" ? "active" : ""}`} type="button">
                  Tahunan (Lebih Hemat)
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            {/* ================== PAKET BULANAN ================== */}
            <div
              className={`tab-pane ${isActive === "monthly" ? "active" : ""}`}
            >
              <div className="row gy-5">
                {/* STARTER WEBSITE */}
                <PricingCard
                  name="Starter Website"
                  price="Rp 350.000"
                  monthly="per bulan"
                  content="Layanan dasar untuk pembuatan website profesional bagi UMKM atau personal brand."
                  FeatureList={[
                    "Website Landing Page / Company Profile",
                    "Desain UI/UX Profesional",
                    "Maintenance Bulanan",
                    "Gratis Hosting 500 MB",
                    "Basic SEO Optimization",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* BUSINESS DIGITAL */}
                <PricingCard
                  name="Business Digital"
                  price="Rp 650.000"
                  monthly="per bulan"
                  content="Solusi lengkap untuk bisnis berkembang yang membutuhkan sistem stabil & dukungan teknis rutin."
                  FeatureList={[
                    "Website + CMS Admin Panel",
                    "Integrasi WhatsApp / Payment Gateway",
                    "Cloud Hosting 2GB",
                    "Maintenance & Backup Rutin",
                    "Desain UI/UX Profesional",
                    "Support Jam Kerja",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* ENTERPRISE SOLUTION */}
                <PricingCard
                  name="Enterprise Solution"
                  price="Rp 1.200.000"
                  monthly="per bulan"
                  content="Paket premium untuk perusahaan besar yang membutuhkan pengembangan sistem khusus & fitur lanjutan."
                  FeatureList={[
                    "Custom System (ERP, HRIS, Inventory, dll)",
                    "Integrasi API & Automasi",
                    "Akses Tim Developer Dedicated",
                    "Cloud Hosting 5GB",
                    "Maintenance 24/7",
                    "Fitur Security & Monitoring",
                  ]}
                  btnname="Hubungi Kami"
                  btnurl="/contact"
                />
              </div>
            </div>

            {/* ================== PAKET TAHUNAN ================== */}
            <div
              className={`tab-pane ${isActive === "yearly" ? "active" : ""}`}
            >
              <div className="row gy-5">
                <PricingCard
                  name="Starter Website"
                  price="Rp 3.000.000"
                  monthly="per tahun"
                  content="Lebih hemat untuk kebutuhan website ringan & profesional."
                  FeatureList={[
                    "Website Landing Page / Company Profile",
                    "Desain UI/UX Profesional",
                    "Maintenance 12 Bulan",
                    "Gratis Domain .com",
                    "Gratis Hosting 1GB",
                    "Basic SEO Optimization",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                <PricingCard
                  name="Business Digital"
                  price="Rp 6.000.000"
                  monthly="per tahun"
                  content="Paket lengkap untuk bisnis yang membutuhkan website + sistem."
                  FeatureList={[
                    "Website + CMS Admin",
                    "Integrasi WA / Payment Gateway",
                    "Cloud Hosting 5GB",
                    "Backup Mingguan",
                    "Desain UI/UX Profesional",
                    "Support Prioritas",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                <PricingCard
                  name="Enterprise Solution"
                  price="Rp 10.000.000"
                  monthly="per tahun"
                  content="Paket premium dengan dukungan penuh untuk pengembangan sistem skala besar."
                  FeatureList={[
                    "Full Custom System Development",
                    "Integrasi API & Automasi",
                    "Server Cloud Premium",
                    "Monitoring 24/7",
                    "Dedicated Developer",
                    "Keamanan Tingkat Lanjut",
                  ]}
                  btnname="Hubungi Kami"
                  btnurl="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
