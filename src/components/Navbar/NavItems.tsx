import Link from "next/link";
import React from "react";

function NavItems() {
  return (
    <div className="hidden lg:ml-8 lg:flex justify-center items-center lg:self-stretch space-x-8 text-black">
      <Link
        className="font-medium hover:-translate-y-1 py-4 transition-all"
        href="#functional"
      >
        Funcjonalności
      </Link>
      <Link
        className="font-medium hover:-translate-y-1 py-4 transition-all"
        href="#cennik"
      >
        Cennik
      </Link>
      <Link
        className="font-medium hover:-translate-y-1 py-4 transition-all"
        href="#jak"
      >
        Jak to działa?
      </Link>
      <Link
        className="font-medium hover:-translate-y-1 py-4 transition-all"
        href="#onas"
      >
        O nas
      </Link>
      <Link
        className="font-medium hover:-translate-y-1 py-4 transition-all"
        href="#faq"
      >
        Faq
      </Link>
      <Link
        className="font-medium  hover:-translate-y-1 py-4 transition-all"
        href="#contact"
      >
        Kontakt
      </Link>
    </div>
  );
}

export default NavItems;
