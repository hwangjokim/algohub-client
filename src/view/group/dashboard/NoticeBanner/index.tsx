import defaultIcon from "@/asset/img/gray_small_icon.png";
import { IcnNew, IcnNotifications } from "@/asset/svg";
import { getNoticeBannerCreateAt } from "@/shared/util/time";
import Image from "next/image";
import { tmpData } from "./constant";
import {
  bannerWrapper,
  contentWrapper,
  headerWrapper,
  notifyWrapper,
  textStyle,
} from "./index.css";

const NoticeBanner = () => {
  // TODO: API 연결 데이터로 변경하기
  // 공지 리스트 중 가장 최근의 공지를 찾는 reduce
  const { createAt, noticeContent, noticeTitle } = tmpData.reduce(
    (mostRecent, currentNotice) => {
      const mostRecentDate = new Date(mostRecent.createAt);
      const currentNoticeDate = new Date(currentNotice.createAt);

      return currentNoticeDate > mostRecentDate ? currentNotice : mostRecent;
    },
  );
  return (
    <aside className={bannerWrapper} aria-label="공지사항">
      <header className={headerWrapper}>
        <div className={notifyWrapper}>
          <IcnNotifications width={24} height={24} focusable="false" />
          <p className={textStyle.header}>공지</p>
        </div>
        <Image
          src={defaultIcon}
          width={20}
          height={20}
          alt="방장 프로필 사진"
        />
        <h2 className={textStyle.head}>{noticeTitle}</h2>
      </header>

      <div className={contentWrapper}>
        <p className={textStyle.content}>{noticeContent}</p>
        <time className={textStyle.time} dateTime={createAt}>
          {getNoticeBannerCreateAt(createAt)}
        </time>
        {<IcnNew width={13} height={13} />}
      </div>
    </aside>
  );
};

export default NoticeBanner;
