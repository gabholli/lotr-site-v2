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
        className="bg-amber-400"
      >
        {children}
      </body>
    </html>
  );
}
