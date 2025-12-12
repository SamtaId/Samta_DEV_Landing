import { Urbanist, Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import "./assets/samta-colors.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-color-font",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default:
      "Samta Dev - Jasa Pembuatan Website, Aplikasi Mobile & Custom Software",
    template: "%s | Samta Dev",
  },
  description:
    "Samta Dev menyediakan jasa pembuatan website profesional, aplikasi mobile, custom software, UI/UX design, dan maintenance untuk bisnis, startup, dan perusahaan di Indonesia. Teknologi modern, harga transparan, dan dukungan jangka panjang.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "pembuatan aplikasi mobile",
    "custom software development",
    "jasa web developer",
    "landing page bisnis",
    "website company profile",
    "aplikasi android ios",
    "UI/UX design",
    "maintenance website",
    "jasa developer medan",
    "web development indonesia",
    "samta dev",
  ],
  authors: [{ name: "Samta Dev Team" }],
  creator: "Samta Dev",
  publisher: "Samta Dev",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://samta.dev",
    siteName: "Samta Dev",
    title: "Samta Dev - Jasa Pembuatan Website & Aplikasi Profesional",
    description:
      "Partner terpercaya untuk solusi digital bisnis Anda. Kami membangun website, aplikasi mobile, dan sistem custom dengan teknologi modern dan harga terjangkau.",
    images: [
      {
        url: "/og-image.png", // Pastikan file ini ada di folder public/
        width: 1200,
        height: 630,
        alt: "Samta Dev - Web & App Development",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Samta Dev - Jasa Pembuatan Website & Aplikasi",
    description:
      "Solusi digital profesional untuk bisnis Anda. Website, mobile app, dan custom software.",
    images: ["/og-image.png"],
    creator: "@samtadev", // Ganti dengan Twitter handle kalau ada
  },

  // Verification (opsional - untuk Google Search Console, dll)
  verification: {
    google: "your-google-verification-code", // Ganti dengan kode verifikasi Google
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://samta.dev",
  },

  // Additional metadata
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="author" content="Samta Dev Team" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Favicon - pastikan file-file ini ada di folder public/ */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Manifest untuk PWA (opsional) */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Color */}
        <meta name="theme-color" content="#c4a86d" />

        {/* Preconnect untuk performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
