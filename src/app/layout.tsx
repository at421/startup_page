import { NavBar } from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}