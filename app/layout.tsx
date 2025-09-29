import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Zim’s Cleaning Services • Manchester",
    description: "Reliable home & office cleaning in Greater Manchester. Book online in minutes.",
    openGraph: { title: "Zim’s Cleaning Services", images: ["/og.jpg"] },
};

export default function RootLayout({ children }:{children:React.ReactNode;}) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-slate-50 text-slate-900`}>{children}</body>
        </html>
    );
}