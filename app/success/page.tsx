import Section from "@/components/Section";
import Button from "@/components/Button";

export default function Success() {
    return (
        <Section className="text-center">
            <h1 className="text-3xl font-bold">Thanks! Your booking request was sent.</h1>
            <p className="mt-3 text-gray-600">We’ll call or WhatsApp you soon to confirm details and price.</p>
            <div className="mt-6"><Button href="https://wa.me/447000000000">Message us on WhatsApp</Button></div>
        </Section>
    );
}