"use client";

import defaultIcon from "@/asset/img/gray_small_icon.png";
import { IcnBtnDeleteCircle, IcnNew } from "@/asset/svg";
import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import Pagination from "@/shared/component/Pagination";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import { textStyle } from "@/view/group/dashboard/index.css";
import Image from "next/image";
import { type ComponentProps, useState } from "react";
import { tmpData } from "../NoticeBanner/constant";
import {
  buttonStyle,
  contentStyle,
  contentWrapper,
  infoWrapper,
  itemStyle,
  noticeHeaderStyle,
  noticeInfoStyle,
  noticeModalWrapper,
  paginationStyle,
  sectionStyle,
} from "./index.css";

const NoticeModal = ({ isOpen, onClose }: ComponentProps<typeof Modal>) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={noticeModalWrapper}>
        {/* 모달 헤더 */}
        <header className={noticeHeaderStyle}>
          <h2 className={textStyle.title}>NOTICE</h2>
          <button onClick={onClose} aria-label="공지 모달 닫기">
            <IcnBtnDeleteCircle width={16} height={16} />
          </button>
        </header>

        {/* 공지사항 목록 */}
        <section aria-label="공지사항 목록" className={sectionStyle}>
          {tmpData.map((notice, index) => (
            <article
              key={index}
              className={itemStyle}
              aria-labelledby={`notice-title-${index}`}
            >
              <div className={contentWrapper}>
                <Image
                  src={defaultIcon}
                  alt="작성자 프로필 사진"
                  width={40}
                  height={40}
                  style={{ width: "4rem", borderRadius: "4rem" }}
                />
                <div className={contentStyle}>
                  <h3 id={`notice-title-${index}`} className={textStyle.head}>
                    {notice.noticeTitle}
                  </h3>
                  <p className={textStyle.modalContent}>
                    {notice.noticeContent}
                  </p>
                </div>
              </div>
              <div className={noticeInfoStyle}>
                <div className={infoWrapper}>
                  <span className={textStyle.author}>{notice.author}</span>
                  <time dateTime={notice.createAt} className={textStyle.time}>
                    {getNoticeBannerCreateAt(notice.createAt)}
                  </time>
                </div>
                <IcnNew width={13} height={13} aria-hidden="true" />
              </div>
            </article>
          ))}
        </section>

        {/* 모달 하단 */}
        <footer>
          <Button size="small" color="gray" className={buttonStyle}>
            글쓰기
          </Button>
          <Pagination
            totalPages={10}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            className={paginationStyle}
          />
        </footer>
      </div>
    </Modal>
  );
};

export default NoticeModal;
