
import Link from "next/link";
import React from "react";

function NavItems() {
  return (
    <div className="hidden lg:ml-8 lg:flex justify-center items-center lg:self-stretch space-x-8 text-black">
      <Link
        className="font-medium uppercase hover:-translate-y-1 py-4 transition-all"
        href="/about"
      >
        Cennik
      </Link>
      <Link
        className="font-medium uppercase hover:-translate-y-1 py-4 transition-all"
        href="/blog"
      >
        O nas
      </Link>
      <Link
        className="font-medium uppercase hover:-translate-y-1 py-4 transition-all"
        href="/contact"
      >
        Dlaczego powinieneś kupić
      </Link>
      <Link
        className="font-medium uppercase hover:-translate-y-1 py-4 transition-all"
        href="/contact"
      >
        Jak to działa?
      </Link>
      <Link
        className="font-medium uppercase hover:-translate-y-1 py-4 transition-all"
        href="/contact"
      >
        FAQ
      </Link>
      <Link
        className="font-medium uppercase hover:-translate-y-1 py-4 transition-all"
        href="/contact"
      >
        Kontakt
      </Link>
    </div>
  );
}

export default NavItems;
