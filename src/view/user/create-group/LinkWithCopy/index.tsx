import { IcnCopy, IcnCopyCheck } from "@/asset/svg";
import { handleLinkCopy } from "@/shared/util/handleLinkCopy";
import {
  icnCopyStyle,
  linkStyle,
  wrapper,
} from "@/view/user/create-group/LinkWithCopy/index.css";
import { useState } from "react";

type LinkWithCopyProps = {
  link: string;
};

const LinkWithCopy = ({ link }: LinkWithCopyProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true);
    handleLinkCopy(link);
  };
  return (
    <div className={wrapper}>
      <p className={linkStyle}>{link}</p>
      {isCopied ? (
        <IcnCopyCheck
          width={24}
          height={24}
          onClick={handleCopyClick}
          role="button"
          aria-label="그룹 초대 링크 복사하기"
          className={icnCopyStyle}
        />
      ) : (
        <IcnCopy
          width={24}
          height={24}
          onClick={handleCopyClick}
          role="button"
          aria-label="그룹 초대 링크 복사하기"
          className={icnCopyStyle}
        />
      )}
    </div>
  );
};

export default LinkWithCopy;
