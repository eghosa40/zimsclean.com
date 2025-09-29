export default function Privacy() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="mt-4 text-gray-600">
                We collect your name, contact details, address, and booking preferences to provide cleaning services. We do not sell your data.
                For access or deletion requests, email hello@zimsclean.co.uk. Last updated: {new Date().toLocaleDateString("en-GB")}.
            </p>
        </main>
    );
}