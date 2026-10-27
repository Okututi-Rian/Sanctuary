import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site-config";

export default function GivingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">Giving</p>
              <h1 className="font-heading text-5xl sm:text-6xl font-light text-ink tracking-tight mb-6">Give Cheerfully</h1>
              <p className="text-lg text-ink/80">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-purple mb-2">M-Pesa Paybill</p>
                  <p className="font-heading text-3xl font-light mb-4">Support the Ministry</p>
                  <div className="space-y-2 text-ink/80">
                    <p><span className="font-medium">Business Number:</span> {siteConfig.paybill.business}</p>
                    <p><span className="font-medium">Account Number:</span> {siteConfig.paybill.account}</p>
                  </div>
                  <p className="mt-4 text-sm text-ink/70">Use this Paybill to give towards tithes, offerings and the church plot fund.</p>
                </CardContent>
              </Card>
              <Card className="bg-tint">
                <CardContent className="p-6">
                  <p className="font-heading text-2xl font-light mb-2">Building Our Own Home</p>
                  <p className="text-ink/80 mb-4">We are currently contributing toward buying a plot and building our own place of worship. Thank you for partnering with us in faith.</p>
                  <p className="text-sm text-ink/70">Your giving helps us step into what God has promised for Sanctuary Of Grace.</p>
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
