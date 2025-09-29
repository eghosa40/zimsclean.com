type Props = { title: string; desc: string };
export default function FeatureCard({ title, desc }: Props) {
    return (
        <div className="card p-6">
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-600)]">{desc}</p>
        </div>
    );
}