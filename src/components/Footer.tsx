import Link from "next/link";
import { Facebook, Phone, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { SafeImage } from "@/components/SafeImage";

export function Footer() {
  return (
    <footer className="bg-deep-purple text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <SafeImage src="/images/logo-mark.png" alt="Sanctuary Of Grace logo" fill className="object-contain" />
              </div>
              <div>
                <p className="font-heading text-xl">{siteConfig.name}</p>
                <p className="text-sm text-white/80">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 max-w-md">"{siteConfig.verse}"</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-sky" />
                <Link href={siteConfig.mapsLink} target="_blank" className="hover:underline">{siteConfig.address}</Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sky" />
                <a href={`tel:${siteConfig.phone}`} className="hover:underline">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="h-4 w-4 text-sky" />
                <Link href={siteConfig.facebook} target="_blank" className="hover:underline">Facebook</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Services</p>
            <ul className="space-y-1 text-sm text-white/80">
              {siteConfig.sundayServices.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
              <li className="mt-2">Midweek: {siteConfig.midweek.days.join(", ")} {siteConfig.midweek.time}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60">
          <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
