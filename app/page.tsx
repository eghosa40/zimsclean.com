import Section from "@/components/Section.tsx";
import Container from "@/components/Container";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
    return (
        <main>
            <Section className="pb-10 pt-24 md:pt-32">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Manchester • Domestic & Commercial</p>
                    <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Zim’s Cleaning Services</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Reliable, insured, and affordable cleaning for homes & offices. One-off, weekly, or end-of-tenancy.
                    </p>
                    <div className="mt-8 flex justify-center gap-3">
                        <Button href="/book">Book a clean</Button>
                        <Button href="#services" variant="ghost">View services</Button>
                    </div>
                </div>
            </Section>

            <Section className="pt-0">
                <Container>
                    <div id="services" className="grid gap-6 md:grid-cols-3">
                        {[
                            { title: "Standard Clean", desc: "Kitchen, bathrooms, surfaces, vacuum & mop. From £60." },
                            { title: "Deep Clean", desc: "Inside oven/fridge, skirting boards, limescale. From £120." },
                            { title: "End of Tenancy", desc: "Check-out ready, inventory-friendly. From £160." },
                        ].map((s) => <FeatureCard key={s.title} {...s} />)}
                    </div>
                    <p className="mt-6 text-sm text-gray-500">Prices vary by size/condition. Final quote confirmed on call.</p>
                </Container>
            </Section>

            <Section>
                <div className="grid items-start gap-6 md:grid-cols-3">
                    <FeatureCard title="DBS-checked staff" desc="Trustworthy professionals." />
                    <FeatureCard title="Supplies included" desc="We bring eco-friendly products & equipment." />
                    <FeatureCard title="Flexible scheduling" desc="Weekdays, weekends, and evenings." />
                </div>
            </Section>

            <Section className="pb-24">
                <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
                    <h2 className="text-2xl font-semibold">Ready for a spotless home?</h2>
                    <p className="mx-auto mt-2 max-w-xl text-gray-600">Send your request — we’ll confirm within 1 business day.</p>
                    <div className="mt-6"><Button href="/book">Book now</Button></div>
                </div>
            </Section>
        </main>
    );
}