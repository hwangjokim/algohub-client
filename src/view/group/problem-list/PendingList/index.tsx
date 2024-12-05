import {
  useDeleteProblemMutation,
  usePatchProblemMutation,
  useProblemInfoQuery,
  useQueuedProblemQuery,
} from "@/app/group/[groupId]/problem-list/query";
import Modal from "@/common/component/Modal";
import { useBooleanState } from "@/common/hook/useBooleanState";
import Pagination from "@/shared/component/Pagination";
import PendingListItem from "@/view/group/problem-list/PendingList/Item";
import { listStyle } from "@/view/group/problem-list/PendingList/index.css";
import PatchForm from "@/view/group/problem-list/RegisterForm/PatchForm";
import { useState } from "react";

const PendingList = ({ groupId }: { groupId: number }) => {
  const { open, isOpen, close } = useBooleanState();
  const [editId, setEditId] = useState(0);

  const [queuedPage, setQueuedPage] = useState(1);
  const { content: queuedData, totalPages: queuedTotalPages } =
    useQueuedProblemQuery(+groupId, queuedPage - 1);
  const handleQueuedPageChange = (page: number) => setQueuedPage(page);

  const { mutate: deleteMutate } = useDeleteProblemMutation();
  const { data: problemInfo } = useProblemInfoQuery(editId);
  const { mutate: patchMutate } = usePatchProblemMutation(editId);

  const handleItemEditClick = (problemId: number) => {
    open();
    setEditId(problemId);
  };

  const handleDelete = () => {
    deleteMutate(editId, {
      onSuccess: () => {
        setTimeout(close, 1700);
      },
    });
  };

  const handleEditSubmit = (
    startDate: Date,
    endDate: Date,
    onSuccess: () => void,
  ) => {
    patchMutate(
      { startDate, endDate },
      {
        onSuccess: () => {
          setTimeout(close, 1700);
        },
      },
    );
    onSuccess();
    setTimeout(() => {
      close();
    }, 1700);
  };

  return (
    <>
      <ul className={listStyle}>
        {queuedData.map((item) => (
          <PendingListItem
            key={item.problemId}
            problemId={item.problemId}
            title={item.title}
            startDate={item.startDate}
            level={item.level}
            onEdit={() => handleItemEditClick(item.problemId)}
          />
        ))}
      </ul>
      {queuedData.length && (
        <Pagination
          style={{ marginTop: "1.6rem" }}
          totalPages={queuedTotalPages}
          currentPage={queuedPage}
          onPageChange={handleQueuedPageChange}
        />
      )}
      <Modal isOpen={isOpen} onClose={close} hasCloseBtn>
        <PatchForm
          onDelete={handleDelete}
          onSubmit={handleEditSubmit}
          problemInfo={problemInfo}
        />
      </Modal>
    </>
  );
};

export default PendingList;
