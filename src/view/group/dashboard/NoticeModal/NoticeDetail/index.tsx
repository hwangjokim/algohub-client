import type { NoticeResponse } from "@/api/notice/type";
import { IcnNew } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import Input from "@/common/component/Input";
import Textarea from "@/common/component/Textarea";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import {
  articleStyle,
  avatarStyle,
  contentStyle,
  contentWrapper,
  headerStyle,
  inputStyle,
  noticeInfoStyle,
  textStyle,
  textareaStyle,
} from "./index.css";

type NoticeDetailProps = {
  data: NoticeResponse;
};

const NoticeDetail = ({
  data: {
    author,
    noticeTitle,
    createAt,
    noticeCategory,
    noticeId,
    noticeContent,
  },
}: NoticeDetailProps) => {
  return (
    <article
      className={articleStyle}
      aria-labelledby={`notice-title-${noticeId}`}
    >
      {/* 상세보기 헤더 */}
      <header className={headerStyle}>
        <div className={contentWrapper}>
          <Avatar className={avatarStyle} alt="작성자 프로필 사진" />
          <div className={contentStyle}>
            <h3 id={`notice-title-${noticeId}`} className={textStyle.category}>
              {noticeCategory}
            </h3>
            <p className={textStyle.title}>{noticeTitle}</p>
          </div>
        </div>

        <div className={noticeInfoStyle}>
          <p className={textStyle.author}>{author}</p>
          <time dateTime={createAt} className={textStyle.time}>
            {getNoticeBannerCreateAt(createAt)}
          </time>
          {<IcnNew width={13} height={13} style={{ minWidth: 13 }} />}
        </div>
      </header>

      {/* 상세보기 내용 */}
      <Textarea value={noticeContent} disabled className={textareaStyle} />

      {/* 상세보기 댓글란 */}
      <ul>
        <></>
      </ul>

      {/* 댓글 입력란 */}
      <Input className={inputStyle} />
    </article>
  );
};

export default NoticeDetail;
