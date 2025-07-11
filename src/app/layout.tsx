import "./globals.css";
import { Host_Grotesk } from "next/font/google";
import { Header, Footer } from "@/components";

const GBO_GROTESK = Host_Grotesk({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`bg-background ${GBO_GROTESK.className} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
