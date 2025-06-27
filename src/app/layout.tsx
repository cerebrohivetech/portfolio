import Header from "@/components/header";
import "./globals.css";
import { Host_Grotesk } from "next/font/google";

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
        <html lang="en">
            <body className={`bg-background ${GBO_GROTESK.className} antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
