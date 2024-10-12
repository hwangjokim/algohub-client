import { DataTable } from "@/shared/component/Table";
import { alarmSettingsData } from "@/shared/constant/example";
import { ALERT_SETTINGS_COLUMNS } from "@/view/user/setting/constant";

const UserDashboardPage = () => {
  return (
    <DataTable
      title=""
      type="알림설정"
      rows={alarmSettingsData}
      cols={ALERT_SETTINGS_COLUMNS}
    />
  );
};

export default UserDashboardPage;
