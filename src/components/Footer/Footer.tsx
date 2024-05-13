import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <div className="border-t border-gray-200 md:mt-40 mt-20 py-10">
      <MaxWidthWrapper>
        <div className="box-grid grid md:grid-cols-3 grid-cols-2">
          <div className="left">
            <div className="box flex flex-col gap-2">
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                />
              </Link>
              <p>
                UL. GRZYBOWSKA 2/29<br></br> 00-131 WARSZAWA
              </p>
              <p>tel. 74 852 00 00</p>
              <p>
                <Link href="mailto:patrykr124@gmail.com">
                  sales@cybers.zone
                </Link>
              </p>
            </div>
          </div>
          <div className="middle flex justify-center">
            <div className="box justify-end flex flex-col gap-4">
              <div className="right md:hidden flex flex-col justify-end  ">
                <div className="nav-box flex flex-col">
                  <Link href="/politykaprywatnosci">Polityka prywatności</Link>
                  <Link href="/regulamin">Regulamin</Link>
                  <Link href="/kontakt">Kontakt</Link>
                </div>
              </div>
              <div className="icon flex justify-center gap-5">
                <Instagram
                  className="cursor-pointer hover:scale-125 transition ease-in-out"
                  size={30}
                />
                <Facebook
                  className="cursor-pointer hover:scale-125 transition ease-in-out"
                  size={30}
                />

                <Linkedin
                  className="cursor-pointer hover:scale-125 transition ease-in-out"
                  size={30}
                />
                <XIcon
                  className="cursor-pointer hover:scale-125 transition ease-in-out"
                  style={{ fontSize: 30 }}
                />
              </div>
            </div>
          </div>
          <div className="right md:flex hidden md:justify-center ">
            <div className="nav-box flex flex-col justify-end ">
              <Link href="/politykaprywatnosci">Polityka prywatności</Link>
              <Link href="/regulamin">Regulamin</Link>
              <Link href="/kontakt">Kontakt</Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Footer;
