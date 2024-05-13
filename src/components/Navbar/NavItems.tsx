import Link from "next/link";
import { LinksData } from "./Links";

function NavItems() {
  return (
    <div className="lg:ml-8 lg:flex justify-center items-center lg:self-stretch space-x-8 text-black">
      {LinksData.map((link) => (
        <Link
          className="font-medium hover:-translate-y-1 py-4 transition-all"
          key={link.id}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}

    </div>
  );
}

export default NavItems;
