import { DataTable } from "@/shared/component/Table";
import { StudyListData } from "@/shared/constant/example";
import { STUDY_LIST_COLUMNS } from "../constant";
import { headingStyle } from "../index.css";
import { backPanelStyle, wrapperStyle } from "./index.css";

const StudyList = () => {
  return (
    <article className={wrapperStyle}>
      <h1 className={headingStyle}>스터디 관리</h1>
      <div className={backPanelStyle} />
      <DataTable
        title="스터디 리스트"
        type="스터디리스트"
        rows={StudyListData}
        cols={STUDY_LIST_COLUMNS}
      />
    </article>
  );
};

export default StudyList;
