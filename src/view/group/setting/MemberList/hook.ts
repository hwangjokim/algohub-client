import {
  TableDataContext,
  TableDispatchContext,
} from "@/view/group/setting/MemberList/MemberListProvider";
import { useContext } from "react";

export const useMemberListState = () => {
  const context = useContext(TableDataContext);
  return context?.state;
};

export const useMemberListDispatch = () => {
  const context = useContext(TableDispatchContext);
  return context;
};
