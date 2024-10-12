"use client";
import type { GroupRankingResponse } from "@/api/group/type";
import { IcnMiniLogo, IcnRankingCard, IcnRankingCardHover } from "@/asset/svg";
import Avatar from "@/common/component/Avatar";
import {
  avatarStyle,
  infoStyle,
  infoTextStyle,
  nicknameStyle,
  rankingCardStyle,
  rankingCardWrapper,
} from "@/view/group/dashboard/component/Ranking/index.css";
import { useState } from "react";

const RankingCard = ({ info }: { info: GroupRankingResponse }) => {
  const { profileImage, rank, solvedCount, userNickname } = info;
  const [isHovered, setIsHovered] = useState(false);

  const parseRank = ["1st", "2nd", "3rd"];
  return (
    <article
      className={rankingCardWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <IcnRankingCardHover width={146} height={197} />
      ) : (
        <IcnRankingCard width={146} height={197} />
      )}
      <div className={rankingCardStyle}>
        <Avatar
          src={profileImage}
          alt={`${rank}등: ${userNickname}`}
          className={avatarStyle}
        />
        <div className={infoStyle}>
          <span className={infoTextStyle({ highlight: true })}>
            {parseRank[rank]}
          </span>
          <IcnMiniLogo width={5} height={5} />
          <span className={infoTextStyle({ highlight: false })}>
            {`${solvedCount} solved`}
          </span>
        </div>
        <h1 className={nicknameStyle}>{userNickname}</h1>
      </div>
    </article>
  );
};

export default RankingCard;
