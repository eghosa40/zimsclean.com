import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Success() {
    return (
        <main>
            <Section className="text-center pt-24 md:pt-32">
                <h1 className="text-3xl md:text-4xl font-bold">Thanks! Your booking request was sent.</h1>
                <p className="mt-3 text-[var(--ink-600)]">We’ll call or WhatsApp you soon to confirm details and price.</p>
                <div className="mt-6 flex justify-center">
                    <Button href="https://wa.me/447000000000" variant="accent">Message us on WhatsApp</Button>                </div>
            </Section>
        </main>
    );
}