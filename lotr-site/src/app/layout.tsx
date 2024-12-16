import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>LOTR Site</title>
      </head>
      <body
        className="bg-trees bg-cover b grid grid-rows-[1fr_75px] min-h-svh"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
