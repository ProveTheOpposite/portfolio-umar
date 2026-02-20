import "./globals.css";

import { inter, spaceGrotesk } from "../fonts";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Umar Kukarkhoev - Motion Designer & Monteur Vidéo Freelance à Nice",
  description:
    "Freelance en motion design et montage vidéo à Nice. Je crée des vidéos dynamiques et des animations percutantes pour créateurs, marques ou autres.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href="/videos/showreel.mp4"
          as="video"
          type="video/mp4"
        />
      </head>

      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Header />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
