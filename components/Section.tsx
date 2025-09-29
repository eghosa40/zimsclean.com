import type { ReactNode } from "react";
import Container from "./Container";
type Props = { children: ReactNode; className?: string };
export default function Section({ children, className = "" }: Props) {
    return (
        <section className={`py-16 md:py-20 ${className}`}>
            <Container>{children}</Container>
        </section>
    );
}