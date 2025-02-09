"use client";

import { useGroupRoleQuery } from "@/app/group/[groupId]/query";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import NoticeList from "@/view/group/dashboard/NoticeModal/NoticeList";
import {
  buttonStyle,
  noticeHeaderStyle,
  noticeModalWrapper,
} from "@/view/group/dashboard/NoticeModal/index.css";
import { textStyle } from "@/view/group/dashboard/index.css";
import { useRouter } from "next/navigation";

const NoticeListPage = ({
  params: { groupId },
}: { params: { groupId: string } }) => {
  const router = useRouter();
  const handleClose = () => router.push(`/group/${groupId}`);
  const { data: role } = useGroupRoleQuery(+groupId);

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      hasCloseBtn
      closeBtnType="secondary"
    >
      <div className={noticeModalWrapper}>
        <header className={noticeHeaderStyle}>
          <h2 className={textStyle.head}>NOTICE</h2>
        </header>
        <NoticeList />
        {role !== "PARTICIPANT" && (
          <Button
            size="small"
            color="gray"
            className={buttonStyle}
            onClick={() => router.push(`/group/${groupId}/notice/create`)}
          >
            글쓰기
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default NoticeListPage;
