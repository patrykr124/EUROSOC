import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import NavMobileMenu from "./NavMobileMenu";

function NavBar() {
  return (
    <div className=" fixed z-50 top-1 inset-x-0 h-16 ">
      <header className="relative h-16 flex items-center ">
        <MaxWidthWrapper>
          <div className="box flex justify-between bg-white shadow-md rounded-xl  md:px-6">
            <div className="ml-4 flex  lg:ml-0 ">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="nav-box hidden lg:flex">
              <NavItems />
            </div>
            <div className="nav-mobile-box lg:hidden flex justify-center items-center">
              <NavMobileMenu />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

export default NavBar;
