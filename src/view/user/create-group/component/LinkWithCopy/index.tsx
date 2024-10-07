import { IcnCopy } from "@/asset/svg";
import { handleLinkCopy } from "@/shared/util/handleLinkCopy";
import {
  icnCopyStyle,
  linkStyle,
  wrapper,
} from "@/view/user/create-group/component/LinkWithCopy/index.css";

type LinkWithCopyProps = {
  link: string;
};

const LinkWithCopy = ({ link }: LinkWithCopyProps) => {
  return (
    <div className={wrapper}>
      <span className={linkStyle}>{link}</span>
      <IcnCopy
        width={24}
        height={24}
        onClick={() => handleLinkCopy(link)}
        role="button"
        aria-label="그룹 초대 링크 복사하기"
        className={icnCopyStyle}
      />
    </div>
  );
};

export default LinkWithCopy;
