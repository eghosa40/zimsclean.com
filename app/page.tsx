import Section from "@/components/Section";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeaturedCard";

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <Section className="pt-24 md:pt-32 pb-8">
                <div className="text-center">
                    <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--ink-600)]">
                        Manchester • Domestic & Commercial
                    </p>
                    <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
                        Zim’s Cleaning Services
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-[var(--ink-600)]">
                        Reliable, insured, and affordable cleaning for homes & offices. One-off, weekly, or end-of-tenancy.
                    </p>
                    <div className="mt-8 flex justify-center gap-3">
                        <Button href="/book" variant="primary" size="lg">Book a clean</Button>
                        <Button href="#services" variant="accent" size="lg">View services</Button>
                    </div>
                </div>
            </Section>

            <div className="hr mx-auto max-w-6xl"></div>

            {/* Services */}
            <Section className="pt-10">
                <div id="services" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { title: "Standard Clean", desc: "Kitchen, bathrooms, surfaces, vacuum & mop. From £60." },
                        { title: "Deep Clean", desc: "Inside oven/fridge, skirting boards, limescale. From £120." },
                        { title: "End of Tenancy", desc: "Check-out ready, inventory-friendly. From £160." },
                    ].map((s) => <FeatureCard key={s.title} {...s} />)}
                </div>
                <p className="mt-4 text-sm text-[var(--ink-600)]">
                    Prices vary by size/condition. Final quote confirmed on call.
                </p>
            </Section>

            {/* Trust */}
            <Section className="pt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard title="DBS-checked staff" desc="Trustworthy professionals." />
                    <FeatureCard title="Supplies included" desc="We bring eco-friendly products & equipment." />
                    <FeatureCard title="Flexible scheduling" desc="Weekdays, weekends, and evenings." />
                </div>
            </Section>

            {/* CTA */}
            <Section className="pt-0 pb-24">
                <div className="card mx-auto max-w-3xl p-8 text-center">
                    <h2 className="text-2xl font-semibold">Ready for a spotless home?</h2>
                    <p className="mt-2 text-[var(--ink-600)]">Send your request — we’ll confirm within 1 business day.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <Button href="/book" variant="primary">Book now</Button>
                        <Button href="/book" variant="ghost">Call back request</Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}