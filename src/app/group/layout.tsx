import NavBar from "@/shared/component/NavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "그룹 페이지",
  description: "알고리즘 스터디 플랫폼 그룹 페이지",
};

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar>
        <NavBar.Item mode="fill" href="/group">
          대시보드
        </NavBar.Item>
        <NavBar.Item mode="stroke" href="/group/solved-list">
          문제 리스트
        </NavBar.Item>
        <NavBar.Item mode="stroke" href="/group/setting">
          스터디 관리
        </NavBar.Item>
      </NavBar>
      {children}
    </main>
  );
}
