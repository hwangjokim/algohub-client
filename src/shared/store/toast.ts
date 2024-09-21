import type { ToastOption } from "@/common/component/Toast/type";
import { atom } from "jotai";

type ToastAtom = {
  toastList: ToastOption[];
};

export const toastAtom = atom<ToastAtom>({
  toastList: [],
});
