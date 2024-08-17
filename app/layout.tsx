import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react"

const inter = Kanit({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
	title: "Music to Sheet",
	description: "An AI powered application that converts audio files to sheet musics",
	keywords:"music, sheet music, ai, audio to sheet music, ai music, sheet music, transcribe, music transcription, transcription, note transcribe",
	robots: "index, follow",
	openGraph: {
        title: "Music to Sheet",
        description: "Convert your audio files to sheet music easily with our AI-powered tool.",
        url: "https://musictosheet.com",
        type: "website",
    },

};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<ViewTransitions >
				<html lang="en">
					<body className={`${inter.className} dark overflow-x-hidden min-h-screen `}>
						<main>
							<Nav />
							{children}
							<Footer />
							<Toaster />
						</main>
						<Analytics />
					</body>
				</html>
			</ViewTransitions>
		</ClerkProvider>
	);
}
