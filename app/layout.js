import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GPsync",
  description: "Download google photos with metadata📱📸",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9488068101453959" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Google Photos, Download, Metadata" />
        <link rel="apple-touch-icon" sizes="180x180" href="app/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="app/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="app/favicon-16x16.png"/>
        <link rel="manifest" href="app/site.webmanifest"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
