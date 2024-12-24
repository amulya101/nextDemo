
import "././ui/globals.css";
import { orbitron } from "./ui/fonts"; 
import Header from "./ui/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
