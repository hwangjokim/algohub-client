import type { GroupRankingResponse } from "@/api/group/type";
import RankList from "@/view/group/dashboard/component/Ranking/RankList";
import { allRankingWrapper } from "@/view/group/dashboard/component/Ranking/index.css";

const AllRanking = () => {
  const tmpData: GroupRankingResponse = {
    userNickname: "달리는 지니",
    profileImage: "",
    rank: 1,
    solvedCount: 38,
  };

  return (
    <ol className={allRankingWrapper}>
      {[tmpData, tmpData, tmpData].map((data, idx) => (
        <RankList key={idx} info={data} />
      ))}
    </ol>
  );
};

export default AllRanking;
