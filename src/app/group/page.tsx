"use client";

import { IcnPlus, IcnSearch, IcnSquare } from "@/asset/svg";
import TabGroup from "@/common/component/Tab";

const GroupDashboardPage = () => {
  return (
    <TabGroup.Tabs
      tag="main"
      style={{ width: "100%", height: "calc(100vh - 7.2rem)" }}
    >
      <TabGroup.TabList>
        <TabGroup.Tab
          renderedIcon={(className: string) => (
            <IcnSquare className={className} width={24} height={24} />
          )}
          tabId="1"
          mode="fill"
        >
          대시보드
        </TabGroup.Tab>
        <TabGroup.Tab
          renderedIcon={(className: string) => (
            <IcnPlus className={className} width={16} height={16} />
          )}
          tabId="2"
          mode="stroke"
        >
          문제 리스트
        </TabGroup.Tab>
        <TabGroup.Tab
          renderedIcon={(className: string) => (
            <IcnSearch className={className} width={18.2} height={18.2} />
          )}
          tabId="3"
          mode="stroke"
        >
          스터디 관리
        </TabGroup.Tab>
      </TabGroup.TabList>
      <TabGroup.TabPanels>
        <div>1번 패널</div>
        <div>2번 패널</div>
        <div>3번 패널</div>
      </TabGroup.TabPanels>
    </TabGroup.Tabs>
  );
};

export default GroupDashboardPage;
