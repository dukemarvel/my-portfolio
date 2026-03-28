"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="relative inline-flex shrink-0 items-center">
          <Image
            src="/black_logo.svg"
            alt="Black logo"
            width={100}
            height={20}
            priority
          />
        </Link>

        <div className="flex items-center justify-end gap-6 md:gap-10">
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative text-base font-semibold text-white/85 transition hover:text-white"
                >
                  <span className={isActive ? "text-white" : undefined}>{item.label}</span>

                  <span
                    className={`absolute -bottom-7 left-1/2 h-px -translate-x-1/2 rounded-full bg-cyan-300/90 shadow-[0_0_18px_rgba(103,232,249,0.9)] transition-all duration-300 ${
                      isActive
                        ? "w-16 opacity-100"
                        : "w-0 opacity-0 group-hover:w-12 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/resume"
            className="hidden rounded-2xl border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_8px_30px_rgba(0,0,0,0.24)] transition hover:border-cyan-300/50 hover:bg-white/10 md:inline-flex"
          >
            Resume
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white md:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
              <span className="block h-0.5 w-5 rounded-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_center,rgba(99,102,241,0.14),transparent_30%),linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
    </header>
  );
}
