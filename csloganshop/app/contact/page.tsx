// app/contact/page.tsx
export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-6">
                Got questions, ideas, or inquiries about publishing? We'd love to hear from you.
            </p>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded"
                    rows={5}
                />
                <button type="submit" className="bg-primary text-white px-6 py-2 rounded">
                    Send Message
                </button>
            </form>
        </div>
    );
}
