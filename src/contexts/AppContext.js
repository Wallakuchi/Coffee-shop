import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const AppContext = ({ children }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  return (
    <StateContext.Provider
      value={{
        activeSearch,
        setActiveSearch,
        activeCart,
        setActiveCart,
        menuBar,
        setMenuBar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAppContext = () => useContext(StateContext);
