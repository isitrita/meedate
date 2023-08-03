"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Market",
    href: "/",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  //   const session = useSession();

  //   console.log(session);

  return (
    <div className="flex justify-between m-10 text-2xl">
      <div className="flex justify-evenly min-w-[300px]">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <div>
              <Link
                key={link.label}
                href={link.href}
                className={isActive ? "active" : ""}
              >
                {link.label}
              </Link>
            </div>
          );
        })}
      </div>

      {/* {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : ( */}
      <Link href="/login">SignIn</Link>
      {/* )} */}
    </div>
  );
};

export { Navigation };
