"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";
import Link from "next/link";

const Pricing1 = () => {
  const [isActive, setIsActive] = useState("monthly");

  return (
    <section className="pricing-section section-padding fix">
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
            Paket Terjangkau untuk UMKM & Startup
          </h2>
          <p className="text">
            Mulai dari Rp 350.000/bulan! Kami memahami kebutuhan UMKM Indonesia. 
            Semua paket bisa dicicil dan disesuaikan dengan budget Anda.
          </p>
        </div>

        <div className="pricing-wrapper style1">
          <div className="tab-section d-flex justify-content-center align-items-center">
            <ul className="nav nav-pills mb-3">
              <li
                className={`nav-item ${isActive === "monthly" ? "active" : ""}`}
                onClick={() => setIsActive("monthly")}
              >
                <button
                  className={`nav-link ${isActive === "monthly" ? "active" : ""}`}
                  type="button"
                >
                  Paket Bulanan
                </button>
              </li>

              <li
                className={`nav-item ${isActive === "yearly" ? "active" : ""}`}
                onClick={() => setIsActive("yearly")}
              >
                <button
                  className={`nav-link ${isActive === "yearly" ? "active" : ""}`}
                  type="button"
                >
                  Paket Sekali Bayar
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            {/* PAKET BULANAN */}
            <div
              className={`tab-pane ${isActive === "monthly" ? "active" : ""}`}
            >
              <div className="row gy-5">
                {/* MICRO */}
                <PricingCard
                  name="Micro"
                  price="Rp 350.000"
                  monthly="per bulan"
                  content="Paket paling terjangkau untuk UMKM yang baru mulai. Cocok untuk usaha kecil dengan budget terbatas."
                  FeatureList={[
                    "Website Landing Page",
                    "Desain Template Premium",
                    "Hosting 500MB",
                    "Domain .my.id Gratis",
                    "SSL Certificate",
                    "Maintenance Bulanan",
                    "Support via WhatsApp",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* STARTER */}
                <PricingCard
                  name="Starter"
                  price="Rp 650.000"
                  monthly="per bulan"
                  content="Paket populer untuk UMKM yang ingin tampil profesional dengan fitur lengkap."
                  FeatureList={[
                    "Website Company Profile",
                    "Desain Custom Semi Premium",
                    "Hosting 2GB",
                    "Domain .com/.id Gratis",
                    "SSL Certificate",
                    "Form Kontak & Maps",
                    "Maintenance & Backup",
                    "Basic SEO",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                  featured={true}
                />

                {/* BUSINESS */}
                <PricingCard
                  name="Business"
                  price="Rp 1.200.000"
                  monthly="per bulan"
                  content="Solusi lengkap untuk bisnis yang ingin scale up dengan sistem terintegrasi."
                  FeatureList={[
                    "Website + Admin Panel",
                    "Desain Custom Premium",
                    "E-commerce / Booking System",
                    "Integrasi WhatsApp Business",
                    "Hosting 5GB",
                    "Advanced SEO",
                    "Training Admin",
                    "Support Fast Response",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />
              </div>
            </div>

            {/* PAKET SEKALI BAYAR */}
            <div
              className={`tab-pane ${isActive === "yearly" ? "active" : ""}`}
            >
              <div className="row gy-5">
                {/* LANDING PAGE */}
                <PricingCard
                  name="Landing Page"
                  price="Rp 1.500.000"
                  monthly="sekali bayar"
                  content="Website satu halaman yang powerful untuk promosi produk atau jasa."
                  FeatureList={[
                    "1 Halaman Landing Page",
                    "Desain Modern & Responsif",
                    "Form Kontak & WhatsApp",
                    "SEO Ready",
                    "Hosting 1 Tahun",
                    "Domain .com Gratis",
                    "Free Maintenance 1 Bulan",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* COMPANY PROFILE */}
                <PricingCard
                  name="Company Profile"
                  price="Rp 3.500.000"
                  monthly="sekali bayar"
                  content="Website profesional untuk company profile dengan desain custom."
                  FeatureList={[
                    "Website 5-7 Halaman",
                    "Desain Custom Premium",
                    "Admin Panel Sederhana",
                    "Form & Maps Integration",
                    "Hosting 1 Tahun (2GB)",
                    "Domain .com/.id Gratis",
                    "SEO Optimization",
                    "Training & Support 3 Bulan",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                  featured={true}
                />

                {/* TOKO ONLINE */}
                <PricingCard
                  name="Toko Online"
                  price="Rp 6.500.000"
                  monthly="sekali bayar"
                  content="Website e-commerce lengkap untuk jualan online dengan admin panel."
                  FeatureList={[
                    "Website E-commerce",
                    "Admin Panel + Product Management",
                    "Shopping Cart & Checkout",
                    "Payment Gateway Integration",
                    "Shipping Calculator",
                    "Customer Account",
                    "Hosting 1 Tahun (5GB)",
                    "Training & Support 6 Bulan",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-5">
            <Link href="/pricing" className="gt-btn gt-btn-icon">
              Lihat Semua Paket Lengkap
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
