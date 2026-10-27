import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/data/events";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Events</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Upcoming Gatherings</h1>
              <p className="text-lg text-ink/80">All services held at Carestan International School, Obama Estate.</p>
            </div>
            <div className="grid gap-4">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-purple mb-2">{event.type}</p>
                      <p className="font-heading text-2xl font-light mb-2">{event.title}</p>
                      <p className="text-ink/80 text-sm mb-3">{event.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-ink/70">
                        <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-sky" />{event.day}</span>
                        <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-sky" />{event.time}</span>
                        <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky" />{event.location}</span>
                      </div>
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
