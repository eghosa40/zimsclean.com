export default function FeatureCard({ title, desc }:{title:string; desc:string;}) {
    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
        </div>
    );
}