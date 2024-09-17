import {
  AppRouterContext,
  type AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { FC } from "react";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";

export const withAppRouterContext = (Story: FC) => {
  document.querySelector("html")!.style.fontSize = "10px";
  return (
    <AppRouterContext.Provider value={{} as AppRouterInstance}>
      <Story />
    </AppRouterContext.Provider>
  );
};
