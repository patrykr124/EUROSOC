"use client";
import { AlignJustify } from "lucide-react";
import React, { useRef, useState } from "react";
import NavItems from "./NavItems";
import { LinksData } from "./Links";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { clickClose } from "@/Hook/Click-close";

function NavMobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen((open) => !open);
  };

  const navRef = useRef<HTMLDivElement | null>(null);
  clickClose(navRef, () => setIsOpen(false));

  return (
    <div
      className="navmobilemenu flex flex-col items-center mr-4 "
      ref={navRef}
    >
      <AlignJustify
        onClick={handleOpen}
        className="cursor-pointer z-10"
        strokeWidth={2.5}
        size={30}
      />
      <MaxWidthWrapper>
        <div
          className={`box-menu fixed rounded-xl top-[9%]  w-[50%] bg-white ${
            isOpen ? "right-3" : "translate-x-full "
          } transition ease-in-out delay-150`}
        >
          <div className="menu-items rounded-xl flex flex-col p-4 shadow-xl">
            {LinksData.map((link) => (
              <Link
                className="font-medium hover:translate-x-2 py-4 transition-all border-b-[1px]"
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default NavMobileMenu;
