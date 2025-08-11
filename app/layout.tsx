import { Quicksand } from "next/font/google";
import "./globals.css";
const quicksand= Quicksand({subsets: ['latin'] ,weight:"400"});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased bg-black text-[#DDDDDD]`}
      >
        {children}
      </body>
    </html>
  );
}
