"use client";

import tmp from "@/asset/img/leejin.png";
import { IcnClose, IcnEdit } from "@/asset/svg";
import {
  containerStyle,
  contentStyle,
  contentWrapperStyle,
  createdAtStyle,
  iconContainerStyle,
  iconStyle,
  profileStyle,
  topContentStyle,
  writerStyle,
} from "@/shared/component/CommentBox/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import type { Comment } from "@/shared/type/comment";
import { getFormattedCreatedAt } from "@/shared/util/time";
import Image from "next/image";

type CommentBox = Comment & {
  variant: "detail" | "notice";
  onDelete?: () => void;
  onEdit?: () => void;
};

const CommentBox = ({
  variant,
  commentId,
  writerNickname,
  writerProfileImage,
  content,
  createdAt,
  onDelete,
  onEdit,
}: CommentBox) => {
  const { isActive, handleFocus, handleBlur, handleMouseOver, handleMouseOut } =
    useA11yHoverHandler();

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      aria-label={`코멘트 ${commentId}`}
      className={containerStyle({ isActive })}
    >
      <Image
        className={profileStyle}
        src={tmp ?? writerProfileImage} // 나중에 서버 이미지로 대체
        alt={`${writerNickname} 프로필 이미지`}
      />
      <div className={contentWrapperStyle({ variant })}>
        <div className={topContentStyle}>
          <p className={writerStyle}>{writerNickname}</p>
          <p className={createdAtStyle}>{getFormattedCreatedAt(createdAt)}</p>
        </div>
        <p className={contentStyle}>{content}</p>
      </div>

      <div className={iconContainerStyle}>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") onEdit?.();
          }}
          className={iconStyle({ variant: "edit", isActive })}
        >
          <IcnEdit onClick={onEdit} width={18} height={18} />
        </div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") onDelete?.();
          }}
          className={iconStyle({ variant: "close", isActive })}
        >
          <IcnClose onClick={onDelete} width={16} height={16} />
        </div>
      </div>
    </li>
  );
};

export default CommentBox;
