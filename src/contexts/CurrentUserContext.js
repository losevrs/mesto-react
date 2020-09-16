import React, { useContext } from 'react'

const CurentUserContext = React.createContext();

export const useCurentUserContext = () => {
  return useContext(CurentUserContext);
}

export const CurentUserContextProvider = (props) => {
  return (
    <CurentUserContext.Provider value={props.value}>
      {props.children}
    </CurentUserContext.Provider>
  );
}