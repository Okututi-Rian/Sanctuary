import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { SafeImage } from "@/components/SafeImage";
import { history } from "@/data/history";

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">History</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Our Journey</h1>
              <p className="text-lg text-ink/80">God has been faithful every step of the way.</p>
            </div>
            <div className="grid gap-6">
              {history.map((entry, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    <div className="relative h-64 md:h-full">
                      <SafeImage src={entry.image} alt={entry.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6 md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs uppercase tracking-[0.3em] text-purple">{entry.year}</span>
                        <div className="h-px flex-1 bg-gold/40" />
                      </div>
                      <p className="font-heading text-3xl font-light mb-3">{entry.title}</p>
                      <p className="text-ink/80">{entry.text}</p>
                    </CardContent>
                  </div>
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
