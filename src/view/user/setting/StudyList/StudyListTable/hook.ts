import { useContext } from "react";
import { TableDataContext, TableDispatchContext } from "./StudyListProvider";

export const useStudyListData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useTableDataContext must be used within a TableProvider");
  }
  return context.processedData;
};

export const useStudyListState = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useTableDataContext must be used within a TableProvider");
  }
  return context.state;
};

export const useStudyListDispatch = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error(
      "useTableDispatchContext must be used within a TableProvider",
    );
  }
  return context;
};
