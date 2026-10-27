import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { SafeImage } from "@/components/SafeImage";
import { ministries } from "@/data/ministries";

export default function MinistriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Ministries</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Serving the Body of Christ</h1>
              <p className="text-lg text-ink/80">Every member has a gift to serve. Here are some of the ways we grow and minister together.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ministries.map((ministry) => (
                <Card key={ministry.slug} className="overflow-hidden">
                  <div className="relative h-52 w-full">
                    <SafeImage src={ministry.image} alt={ministry.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <p className="font-heading text-2xl font-light mb-2">{ministry.name}</p>
                    <p className="text-ink/80 text-sm mb-4">{ministry.description}</p>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-xs uppercase tracking-[0.2em] text-purple">Leader</span>: {ministry.leader}</p>
                      <p><span className="text-xs uppercase tracking-[0.2em] text-purple">Time</span>: {ministry.meetingTime}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
