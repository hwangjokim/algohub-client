import { IcnPlus, IcnSearch, IcnSquare } from "@/asset/svg";
import NavBar from "@/shared/component/NavBar";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar>
        <NavBar.Item icon={<IcnSquare />} mode="fill" href="/group">
          대시보드
        </NavBar.Item>
        <NavBar.Item
          icon={<IcnSearch />}
          mode="stroke"
          href="/group/solved-list"
        >
          문제 리스트
        </NavBar.Item>
        <NavBar.Item icon={<IcnPlus />} mode="stroke" href="/group/setting">
          스터디 관리
        </NavBar.Item>
      </NavBar>
      {children}
    </main>
  );
}
