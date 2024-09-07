"use client";

import { Provider } from "jotai";
import { PropsWithChildren } from "react";

type ProviderProps = PropsWithChildren;

/** Context와 동일한 역할을 하는 Provider 입니다. Context 대신 사용 가능합니다. */
const Providers = ({ children }: ProviderProps) => {
  return <Provider>{children}</Provider>;
};

export default Providers;
