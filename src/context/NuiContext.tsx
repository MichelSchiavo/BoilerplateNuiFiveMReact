import { createContext, useState, ReactNode, useContext } from "react";

interface NuiContextData {
  status: boolean;
  changeStatus: (val: boolean) => void;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

export const NuiContext = createContext({} as NuiContextData);

export function NuiContextProvider({ children }: PlayerContextProviderProps) {
  const [status, setStatus] = useState(false);

  function changeStatus(val: boolean) {
    setStatus(val);
  }

  return (
    <NuiContext.Provider
      value={{
        status,
        changeStatus,
      }}
    >
      {children}
    </NuiContext.Provider>
  );
}

export const useNuiNuiContext = () => {
  return useContext(NuiContext);
};
