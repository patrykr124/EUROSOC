import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";

function NavBar() {
  return (
    <div className=" fixed z-50 top-1 inset-x-0 h-16 ">
      <header className="relative h-16 flex items-center ">
        <MaxWidthWrapper>
          <div className="box flex justify-between bg-white shadow-md rounded-xl px-6">
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
            <NavItems />
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

export default NavBar;
