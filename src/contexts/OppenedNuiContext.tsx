import { createContext, useState, ReactNode, useContext } from "react";

type OppenedNuiContextData = {
  status: boolean;
  changeStatus: (val: boolean) => void;
};

type PlayerContextProviderProps = {
  children: ReactNode;
};

export const OppenedNuiContext = createContext({} as OppenedNuiContextData);

export function OppenedNuiContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [status, setStatus] = useState(false);

  function changeStatus(val: boolean) {
    setStatus(val);
  }

  return (
    <OppenedNuiContext.Provider
      value={{
        status,
        changeStatus,
      }}
    >
      {children}
    </OppenedNuiContext.Provider>
  );
}

export const useOppenedNuiContext = () => {
  return useContext(OppenedNuiContext);
};
