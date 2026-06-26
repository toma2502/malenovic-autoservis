import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autoservis Malenović – Automehaničarska radionica Županja",
  description: "Stručne usluge automehanike, auto elektronike, punjenja i popravka klime, dijagnostike i eco-testa u Županje.",
  openGraph: {
    title: "Autoservis Malenović",
    description: "Pouzdan servis. Sigurna vožnja.",
    locale: "hr_HR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
