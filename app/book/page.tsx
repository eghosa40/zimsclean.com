"use client";
import { useState } from "react";
import Section from "@/components/Section";

const FORMSPREE = "https://formspree.io/f/yourid"; // replace after you create the form

export default function BookPage() {
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const form = e.currentTarget;
        const data = new FormData(form);
        if ((data.get("website") as string)?.length) return; // honeypot
        const res = await fetch(FORMSPREE, { method: "POST", body: data, headers: { Accept: "application/json" } });
        setLoading(false);
        if (res.ok) window.location.href = "/success";
        else alert("There was a problem sending your booking. Please try again.");
    }

    return (
        <Section>
            <h1 className="text-3xl font-bold">Book a Clean</h1>
            <p className="mt-2 text-gray-600">We’ll confirm by phone within 1 business day.</p>

            <form onSubmit={onSubmit} className="mt-8 grid max-w-2xl grid-cols-1 gap-4">
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <input required name="name" placeholder="Full name" className="rounded-lg border p-3 bg-white" />
                <input required name="email" type="email" placeholder="Email" className="rounded-lg border p-3 bg-white" />
                <input required name="phone" placeholder="Phone" className="rounded-lg border p-3 bg-white" />
                <input required name="address" placeholder="Address (incl. postcode)" className="rounded-lg border p-3 bg-white" />
                <select name="service" className="rounded-lg border p-3 bg-white" defaultValue="Standard Clean">
                    <option>Standard Clean</option><option>Deep Clean</option>
                    <option>End of Tenancy</option><option>Office Clean</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                    <input name="bedrooms" type="number" min={0} placeholder="Bedrooms" className="rounded-lg border p-3 bg-white" />
                    <input name="bathrooms" type="number" min={0} placeholder="Bathrooms" className="rounded-lg border p-3 bg-white" />
                </div>
                <input name="date" type="date" className="rounded-lg border p-3 bg-white" />
                <select name="time_window" className="rounded-lg border p-3 bg-white" defaultValue="Anytime">
                    <option>Anytime</option><option>Morning (8–12)</option><option>Afternoon (12–4)</option><option>Evening (4–7)</option>
                </select>
                <textarea name="notes" placeholder="Notes (pets, parking, special requests…)" className="rounded-lg border p-3 bg-white" rows={4} />

                <p className="text-sm text-gray-500">Same-day availability is best for Manchester postcodes starting with <strong>M</strong>.</p>
                <button disabled={loading} className="rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-white shadow hover:bg-sky-600 disabled:opacity-60">
                    {loading ? "Sending…" : "Submit booking"}
                </button>
            </form>
        </Section>
    );
}