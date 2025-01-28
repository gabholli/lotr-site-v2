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
        <title>LOTR Compendium</title>
        <link rel="shortcut icon" type="image/x-icon" href="/book.ico" />
      </head>
      <body
        className="font-garamond grid grid-rows-[1fr_75px] min-h-svh"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
