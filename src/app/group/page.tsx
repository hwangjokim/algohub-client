"use client";

import {} from "@/asset/svg";
import Modal from "@/common/component/Modal";
import RegisterForm from "@/view/group/problem-list/component/RegisterForm";
import { useState } from "react";

const GroupDashboardPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <RegisterForm />
    </Modal>
  );
};

export default GroupDashboardPage;
