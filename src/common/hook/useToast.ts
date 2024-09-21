import { toastAtom } from "@/shared/store/toast";
import { useAtomValue, useSetAtom } from "jotai";

export const useToast = () => {
  const setToastList = useSetAtom(toastAtom);
  const { toastList } = useAtomValue(toastAtom);

  const createToast = (
    message: string,
    variant?: "error" | "success" | "default",
    duration?: number
  ) => {
    const added = [
      ...toastList,
      {
        id: self.crypto.randomUUID(),
        message,
        variant,
        duration,
      },
    ];

    setToastList({ toastList: added });
  };

  return { createToast };
};
