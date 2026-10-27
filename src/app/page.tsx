import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SafeImage } from "@/components/SafeImage";
import { siteConfig } from "@/data/site-config";
import { events } from "@/data/events";
import { ministries } from "@/data/ministries";

export default function Home() {
  const serviceEvents = events.filter((e) => e.type === "service");
  const midweek = events.filter((e) => e.type === "midweek");
  const featuredMinistries = ministries.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative">
          <div className="relative h-[70vh] min-h-[480px] w-full">
            <SafeImage src="/images/hero-worship.jpg" alt="Worship at Sanctuary Of Grace" fill className="object-cover" />
            <div className="absolute inset-0 bg-deep-purple/60" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Welcome to</p>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight">
                  {siteConfig.name}
                </h1>
                <p className="mt-4 text-xl sm:text-2xl text-white/90 font-heading font-light">{siteConfig.tagline}</p>
                <p className="mt-2 text-white/80">"{siteConfig.verse}"</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="/contact">Plan Your Visit</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Join Us</p>
                <h2 className="font-heading text-4xl sm:text-5xl font-light text-ink tracking-tight">Service Times</h2>
              </div>
              <p className="text-ink/80 max-w-xl">We gather to worship, pray and grow in the Word at Carestan International School, Obama Estate.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {serviceEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-purple mb-2">{event.day}</p>
                    <p className="font-heading text-xl font-light mb-2">{event.title.replace("Sunday Service - ", "")}</p>
                    <p className="text-ink/80 text-sm">{event.time}</p>
                  </CardContent>
                </Card>
              ))}
              {midweek.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-purple mb-2">{event.day}</p>
                    <p className="font-heading text-xl font-light mb-2">Midweek Service</p>
                    <p className="text-ink/80 text-sm">{event.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-tint">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Our Ministries</p>
                <h2 className="font-heading text-4xl sm:text-5xl font-light text-ink tracking-tight">Serving Together</h2>
              </div>
              <Button variant="secondary" asChild>
                <Link href="/ministries">View All Ministries</Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredMinistries.map((ministry) => (
                <Card key={ministry.slug} className="overflow-hidden">
                  <div className="relative h-48 w-full">
                    <SafeImage src={ministry.image} alt={ministry.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <p className="font-heading text-2xl font-light mb-2">{ministry.name}</p>
                    <p className="text-ink/80 text-sm mb-3">{ministry.description}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-purple">Leader: {ministry.leader}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="relative h-[420px] w-full">
                <SafeImage src="/images/about-main.jpg" alt="Sanctuary Of Grace congregation" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">About Us</p>
                <h2 className="font-heading text-4xl sm:text-5xl font-light text-ink tracking-tight mb-4">A Family of Faith</h2>
                <p className="text-ink/80 mb-4">Sanctuary Of Grace is a Christ centered church located in Obama Estate. We are committed to worship, prayer, discipleship and loving our community.</p>
                <p className="text-ink/80 mb-6">"{siteConfig.tagline}" - {siteConfig.verse}</p>
                <Button asChild>
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
