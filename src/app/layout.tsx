import Header from "@/shared/component/Header";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/shared/component/Provider";

export const metadata: Metadata = {
  title: "AlgoHub",
  description: "알고리즘 스터디 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
