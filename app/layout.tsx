import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link"; // ← add this

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Zim’s Cleaning Services • Manchester",
    description: "Reliable home & office cleaning in Greater Manchester. Book online in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-[var(--canvas)] text-[var(--ink-900)]`}>
        <header className="sticky top-0 z-10 backdrop-blur bg-white/80 border-b border-[var(--line)]">
            <div className="mx-auto max-w-6xl h-14 flex items-center justify-between px-6 md:px-8">
                {/* was <a href="/"> */}
                <Link href="/" className="text-sm font-semibold tracking-tight">Zim’s Cleaning</Link>

                <nav className="hidden sm:flex items-center gap-6 text-sm">
                    <a href="#services" className="hover:opacity-80">Services</a> {/* anchor to section is fine */}
                    <Link href="/book" className="hover:opacity-80">Book</Link>
                </nav>

                {/* was <a href="/book"> */}
                <Link
                    href="/book"
                    className="hidden sm:inline-flex text-sm text-white bg-[var(--brand-blue)] px-4 py-1.5 rounded-lg hover:bg-[#0858d8]"
                >
                    Book now
                </Link>
            </div>
        </header>
        {children}
        </body>
        </html>
    );
}