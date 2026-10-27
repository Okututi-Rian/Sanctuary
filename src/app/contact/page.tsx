import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Contact</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Plan Your Visit</h1>
              <p className="text-lg text-ink/80">We would love to worship with you. Come as you are.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-sky mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-ink/80">{siteConfig.address}</p>
                      <Button variant="link" asChild className="px-0">
                        <Link href={siteConfig.mapsLink} target="_blank">Get Directions</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-sky mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-ink/80 hover:underline">{siteConfig.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-sky mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-ink/80 hover:underline">{siteConfig.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Facebook className="h-5 w-5 text-sky mt-0.5" />
                    <div>
                      <p className="font-medium">Facebook</p>
                      <Link href={siteConfig.facebook} target="_blank" className="text-ink/80 hover:underline">Sanctuary Of Grace</Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sky mt-0.5" />
                    <div>
                      <p className="font-medium">Service Times</p>
                      <ul className="text-ink/80 space-y-1">
                        {siteConfig.sundayServices.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                        <li>Midweek: {siteConfig.midweek.days.join(", ")} {siteConfig.midweek.time}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-tint">
                <CardContent className="p-6">
                  <p className="font-heading text-2xl font-light mb-2">We'd love to hear from you</p>
                  <p className="text-ink/80 mb-6">For prayer requests or inquiries, please reach out via phone, email or Facebook. We are here to pray with you.</p>
                  <Button asChild>
                    <a href={`tel:${siteConfig.phone}`}>Call Us</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
