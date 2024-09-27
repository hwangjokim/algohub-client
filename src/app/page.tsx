"use client"
import { Pagination } from "@/shared/component/Pagination";
import "@/styles/globalStyles.css";
import { theme } from "@/styles/themes.css";
import { useState } from "react";

const OnboardingPage = () => {
  const [page, setPage] = useState(1); // 현재 페이지 상태

  const totalPages = 13; // 총 페이지 수

  return (
    <div
      style={{
        backgroundColor: theme.color.bg,
        width: "500px",
        height: "500px",
      }}
    >
      <Pagination
        count={totalPages}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};

export default OnboardingPage;
