import { useContext } from "react";
import { TableDataContext, TableDispatchContext } from "./StudyListProvider";

export const useTableData = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useTableDataContext must be used within a TableProvider");
  }
  return context.processedData;
};

export const useTableState = () => {
  const context = useContext(TableDataContext);
  if (!context) {
    throw new Error("useTableDataContext must be used within a TableProvider");
  }
  return context.state;
};

export const useTableDispatch = () => {
  const context = useContext(TableDispatchContext);
  if (!context) {
    throw new Error(
      "useTableDispatchContext must be used within a TableProvider",
    );
  }
  return context;
};
