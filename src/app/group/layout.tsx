import { IcnPlus, IcnSearch, IcnSquare } from "@/asset/svg";
import NavBar from "@/shared/component/NavBar";
import NavBarItem from "@/shared/component/NavBar/Item";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar>
        <NavBarItem icon={<IcnSquare />} mode="fill" href="/group">
          대시보드
        </NavBarItem>
        <NavBarItem
          icon={<IcnSearch />}
          mode="stroke"
          href="/group/solved-list"
        >
          문제 리스트
        </NavBarItem>
        <NavBarItem icon={<IcnPlus />} mode="stroke" href="/group/setting">
          스터디 관리
        </NavBarItem>
      </NavBar>
      {children}
    </main>
  );
}
