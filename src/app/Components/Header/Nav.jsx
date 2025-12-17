import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          Tentang kami
        </Link>
      </li>
      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Layanan
        </Link>
      </li>
      <li>
        <Link href="/team" onClick={() => setMobileToggle(false)}>
          Tim
        </Link>
      </li>
      <li>
        <Link href="/pricing" onClick={() => setMobileToggle(false)}>
          Harga
        </Link>
      </li>
      <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
          Projek
        </Link>
      </li>
      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Kontak
        </Link>
      </li>
    </ul>
  );
}
