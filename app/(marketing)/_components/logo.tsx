import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <Link
      href="/"
      className="hidden md:flex items-center gap-x-2 select-none cursor-default"
    >
      <Image
        src="/logo.svg"
        height={40}
        width={40}
        alt="Logo"
        className="dark:hidden"
        draggable={false}
      />

      <Image
        src="/logo-dark.svg"
        height={40}
        width={40}
        alt="Logo"
        className="hidden dark:block"
        draggable={false}
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </Link>
  );
};
