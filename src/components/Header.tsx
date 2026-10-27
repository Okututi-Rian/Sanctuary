"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/data/site-config";
import { SafeImage } from "@/components/SafeImage";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/history", label: "History" },
  { href: "/giving", label: "Giving" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="bg-white border-b border-gold/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <SafeImage src="/images/logo-mark.png" alt="Sanctuary Of Grace logo" fill className="object-contain" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading text-lg leading-tight text-ink">{siteConfig.name}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-purple">{siteConfig.verse}</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-ink hover:text-purple transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-base text-ink hover:text-purple">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
