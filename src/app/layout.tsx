import Providers from "@/components/common/Provider";
import type { Metadata } from "next";
import "./globals.css";

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
        {/** NextJS의 SSR 시 global state의 범위를 제한시키기 위한 Providers */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
