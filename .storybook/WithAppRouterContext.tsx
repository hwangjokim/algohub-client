import ToastProvider from "@/common/component/Toast";
import {
  AppRouterContext,
  type AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { FC } from "react";

const WithAppRouterContext = (Story: FC) => {
  document.querySelector("html")!.style.fontSize = "10px";
  return (
    <AppRouterContext.Provider value={{} as AppRouterInstance}>
      <ToastProvider />
      <Story />
    </AppRouterContext.Provider>
  );
};

export default WithAppRouterContext;
