export default function Button({ href, children, variant="primary" }:{
    href?: string; children: React.ReactNode; variant?: "primary"|"ghost";
}) {
    const cls = variant==="primary"
        ? "inline-flex items-center rounded-lg bg-sky-500 px-5 py-2.5 text-white shadow hover:bg-sky-600"
        : "inline-flex items-center rounded-lg border px-5 py-2.5 hover:bg-gray-50";
    return href ? <a className={cls} href={href}>{children}</a> : <button className={cls}>{children}</button>;
}