import Sidebar from "@/common/component/Sidebar";
import "@/styles/globalStyles.css";
import UserCard from "@/view/user/index/component/UserCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlgoHub 유저 페이지",
  description: "특정 유저가 참여한 그룹 리스트를 볼 수 있는 페이지",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", alignItems: "stretch" }}>
      <Sidebar>
        <UserCard />
      </Sidebar>
      {children}
    </div>
  );
}
