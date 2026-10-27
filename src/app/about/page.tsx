import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SafeImage } from "@/components/SafeImage";
import { Card, CardContent } from "@/components/ui/card";
import { leaders, associatePastorsNote } from "@/data/leaders";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">About</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Sanctuary Of Grace</h1>
              <p className="text-lg text-ink/80 mb-4">We are a family of believers growing together in worship, prayer, discipleship and service. Our desire is to know Jesus and make Him known.</p>
              <p className="text-ink/80">Located at Carestan International School, Obama Estate.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="relative h-[420px] w-full">
                <SafeImage src="/images/about-main.jpg" alt="About Sanctuary Of Grace" fill className="object-cover" />
              </div>
              <div className="relative h-[420px] w-full">
                <SafeImage src="/images/about-diamond.jpg" alt="Church gathering" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-tint">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Leadership</p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-ink tracking-tight">Our Pastors</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {leaders.map((leader) => (
                <Card key={leader.name} className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-72 md:h-full">
                      <SafeImage src="/images/pastor-silas.jpg" alt={leader.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <p className="font-heading text-2xl font-light mb-1">{leader.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-purple mb-4">{leader.role}</p>
                      {leader.bio?.map((b, i) => (
                        <p key={i} className="text-ink/80 text-sm mb-2">{b}</p>
                      ))}
                    </CardContent>
                  </div>
                </Card>
              ))}
              <Card>
                <CardContent className="p-6">
                  <p className="font-heading text-2xl font-light mb-2">Our Associate Pastors</p>
                  <p className="text-ink/80">{associatePastorsNote}</p>
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
