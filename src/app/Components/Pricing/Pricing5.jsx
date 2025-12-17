"use client";
import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";

const Pricing5 = () => {
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
            {/* ================== PAKET BULANAN (SUBSCRIPTION) ================== */}
            <div
              className={`tab-pane ${isActive === "monthly" ? "active" : ""}`}
            >
              <div className="row gy-5">
                {/* MICRO - PALING MURAH */}
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
                    "Max 5 Halaman",
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
                    "Support Prioritas",
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
                    "Maintenance & Backup Rutin",
                    "Training Admin",
                    "Support Fast Response",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />
              </div>

              {/* Digital Marketing - Bulanan */}
              <div className="row gy-5 mt-4">
                <div className="col-12">
                  <h3 className="text-center mb-4">Layanan Digital Marketing</h3>
                </div>

                {/* SOCIAL MEDIA LITE */}
                <PricingCard
                  name="Social Media Lite"
                  price="Rp 500.000"
                  monthly="per bulan"
                  content="Kelola 1 akun social media dengan konten berkualitas."
                  FeatureList={[
                    "1 Platform (Instagram/Facebook)",
                    "10 Konten Feed per Bulan",
                    "Desain Grafis Profesional",
                    "Copywriting",
                    "Scheduling Post",
                    "Basic Analytics Report",
                    "Support via WhatsApp",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* SOCIAL MEDIA PRO - INI YANG DIPERBAIKI */}
                <PricingCard
                  name="Social Media Pro"
                  price="Rp 1.500.000"
                  monthly="per bulan"
                  content="Paket lengkap untuk kelola multiple platform dengan strategi konten."
                  FeatureList={[
                    "3 Platform (IG, FB, TikTok)",
                    "20 Konten per Bulan",
                    "Desain Premium",
                    "Copywriting Profesional",
                    "Content Planning & Calendar",
                    "Community Management",
                    "Monthly Report & Analytics",
                    "Konsultasi Strategi",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                  featured={true}
                />

                {/* DIGITAL ADS STARTER */}
                <PricingCard
                  name="Digital Ads Starter"
                  price="Rp 800.000"
                  monthly="per bulan + ad budget min 1jt"
                  content="Mulai beriklan di Google atau Facebook dengan biaya terjangkau."
                  FeatureList={[
                    "Google Ads ATAU Facebook Ads",
                    "Setup & Optimization",
                    "Ad Creative Design (3 Varian)",
                    "Keyword Research",
                    "Targeting Optimization",
                    "Weekly Monitoring",
                    "Bi-weekly Report",
                    "Minimum Ad Budget Rp 1jt",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />
              </div>

              {/* E-commerce Services */}
              <div className="row gy-5 mt-4">
                <div className="col-12">
                  <h3 className="text-center mb-4">Layanan E-commerce</h3>
                </div>

                {/* MARKETPLACE BASIC */}
                <PricingCard
                  name="Marketplace Basic"
                  price="Rp 750.000"
                  monthly="per bulan"
                  content="Kelola 1 toko marketplace untuk maksimalkan penjualan online."
                  FeatureList={[
                    "1 Marketplace (Tokopedia/Shopee)",
                    "Product Listing & Optimization",
                    "Order Processing",
                    "Customer Service Chat",
                    "Basic Campaign Setup",
                    "Weekly Sales Report",
                    "Review Management",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* MARKETPLACE PRO */}
                <PricingCard
                  name="Marketplace Pro"
                  price="Rp 1.800.000"
                  monthly="per bulan"
                  content="Kelola multiple marketplace dengan strategi optimasi lengkap."
                  FeatureList={[
                    "3 Marketplace (Tokped, Shopee, Lazada)",
                    "Product Listing Optimization",
                    "Inventory Management",
                    "Order Processing & CS 24/7",
                    "Campaign & Flash Sale Setup",
                    "Ads Management",
                    "Analytics & Report",
                    "Rating Booster Strategy",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                  featured={true}
                />

                {/* SEO BASIC */}
                <PricingCard
                  name="SEO Basic"
                  price="Rp 900.000"
                  monthly="per bulan"
                  content="Tingkatkan ranking Google dengan strategi SEO dasar yang efektif."
                  FeatureList={[
                    "SEO Audit",
                    "Keyword Research (10 Keywords)",
                    "On-Page Optimization",
                    "Technical SEO Basic",
                    "Google My Business Setup",
                    "Content Suggestion",
                    "Monthly Ranking Report",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />
              </div>
            </div>

            {/* ================== PAKET SEKALI BAYAR (ONE TIME) ================== */}
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
                    "Source Code",
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

              {/* Mobile App & Advanced */}
              <div className="row gy-5 mt-4">
                <div className="col-12">
                  <h3 className="text-center mb-4">Mobile App & Advanced</h3>
                </div>

                {/* MOBILE APP BASIC */}
                <PricingCard
                  name="Mobile App Basic"
                  price="Rp 12.000.000"
                  monthly="sekali bayar"
                  content="Aplikasi mobile sederhana untuk Android atau iOS."
                  FeatureList={[
                    "Mobile App (Android ATAU iOS)",
                    "5-7 Screens",
                    "Custom UI Design",
                    "Backend API Integration",
                    "Push Notification",
                    "App Store Deployment",
                    "Source Code",
                    "Support 3 Bulan",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* MOBILE APP PRO */}
                <PricingCard
                  name="Mobile App Pro"
                  price="Rp 20.000.000"
                  monthly="sekali bayar (bisa cicil)"
                  content="Aplikasi mobile lengkap untuk Android & iOS dengan Flutter."
                  FeatureList={[
                    "Flutter App (Android + iOS)",
                    "Unlimited Screens",
                    "Custom UI/UX Premium",
                    "Backend + Admin Panel",
                    "Push Notification",
                    "Payment Gateway",
                    "Analytics Integration",
                    "Deployment & Source Code",
                    "Support 6 Bulan",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                  featured={true}
                />

                {/* CUSTOM SYSTEM */}
                <PricingCard
                  name="Custom System"
                  price="Mulai Rp 15.000.000"
                  monthly="bisa dicicil 3-6 bulan"
                  content="Sistem custom sesuai kebutuhan bisnis Anda (ERP, HRIS, CRM, dll)."
                  FeatureList={[
                    "Full Custom Development",
                    "Analisis Kebutuhan Detail",
                    "Custom Features",
                    "Admin Panel Lengkap",
                    "Integration Ready",
                    "Cloud Hosting Setup",
                    "Training & Documentation",
                    "Support 12 Bulan",
                    "Payment Bisa Dicicil",
                  ]}
                  btnname="Konsultasi Gratis"
                  btnurl="/contact"
                />
              </div>

              {/* Design & Branding */}
              <div className="row gy-5 mt-4">
                <div className="col-12">
                  <h3 className="text-center mb-4">Design & Branding</h3>
                </div>

                {/* LOGO DESIGN */}
                <PricingCard
                  name="Logo Design"
                  price="Rp 500.000"
                  monthly="sekali bayar"
                  content="Desain logo profesional untuk brand identity bisnis Anda."
                  FeatureList={[
                    "2 Konsep Logo Design",
                    "3x Revisi",
                    "File PNG, JPG, PDF",
                    "Basic Brand Guideline",
                    "Mockup Preview",
                    "Commercial Rights",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                />

                {/* BRANDING PACKAGE */}
                <PricingCard
                  name="Branding Package"
                  price="Rp 2.500.000"
                  monthly="sekali bayar"
                  content="Paket lengkap untuk membangun brand identity yang kuat."
                  FeatureList={[
                    "Logo Design (3 Konsep)",
                    "Brand Guideline",
                    "Color Palette & Typography",
                    "Business Card",
                    "Letterhead",
                    "Social Media Templates (10)",
                    "File Vector & Mockup",
                    "Unlimited Revision",
                  ]}
                  btnname="Pilih Paket"
                  btnurl="/contact"
                  featured={true}
                />

                {/* CONTENT CREATION */}
                <PricingCard
                  name="Content Creation"
                  price="Rp 1.200.000"
                  monthly="paket 20 konten"
                  content="Pembuatan konten visual untuk social media atau marketing."
                  FeatureList={[
                    "20 Desain Konten",
                    "Instagram/Facebook Ready",
                    "Story & Feed Format",
                    "Copywriting Included",
                    "2x Revisi per Design",
                    "File PNG & JPG",
                    "Commercial License",
                  ]}
                  btnname="Pilih Paket"
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

export default Pricing5;
