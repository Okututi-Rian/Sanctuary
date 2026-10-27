import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/SafeImage";
import { sermons } from "@/data/sermons";
import Link from "next/link";
import { Play } from "lucide-react";

export default function SermonsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Sermons</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Hear the Word</h1>
              <p className="text-lg text-ink/80">Messages to encourage and equip you in your walk with Jesus.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sermons.map((sermon) => (
                <Card key={sermon.id} className="overflow-hidden">
                  <div className="relative h-52 w-full">
                    <SafeImage src={sermon.thumbnail} alt={sermon.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-deep-purple/30 flex items-center justify-center">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="font-heading text-2xl font-light mb-2">{sermon.title}</p>
                    <p className="text-sm text-ink/80 mb-1">{sermon.speaker}</p>
                    <p className="text-sm text-ink/60 mb-4">{sermon.date}</p>
                    <Button variant="secondary" asChild>
                      <Link href={sermon.youtubeUrl} target="_blank">Watch on YouTube</Link>
                    </Button>
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
