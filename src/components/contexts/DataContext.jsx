import { createContext, useState } from "react";
import axios from "axios";



const defaultData = {
  data: null,
  setData: () => {},
};



export const DataContext = createContext(defaultData);

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
