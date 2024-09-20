import type { Dispatch, ReactNode, Reducer } from "react";
import { createContext, useReducer } from "react";

type Actions =
  | {
      _TAG: "SetVariant";
      variant: "primary" | "secondary";
    }
  | { _TAG: "SetSelectedTab"; tabId: string | number };

type State = {
  variant: "primary" | "secondary";
  selectedTabId: string | number;
};

const reducer: Reducer<State, Actions> = (state: State, action: Actions) => {
  switch (action._TAG) {
    case "SetVariant": {
      return {
        ...state,
        variant: action.variant,
      };
    }
    case "SetSelectedTab": {
      return {
        ...state,
        selectedTabId: action.tabId,
      };
    }
  }
};

type Context = {
  state: State;
  dispatch: Dispatch<Actions>;
} | null;

const TabContext = createContext<Context>(null);

type TabProviderProps = {
  variant?: State["variant"];
  children: ReactNode;
};

const TabProvider = ({ variant = "primary", children }: TabProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, {
    variant,
    selectedTabId: "1",
  });

  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
