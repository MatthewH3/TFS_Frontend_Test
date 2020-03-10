import React, { createContext, useEffect, useState, ReactNode } from "react";
import NewsApi from "api/newsApi";

import { AxiosResponse } from "axios";

import { FetchReslutType } from "typings/newsType";
import ErrorType from "typings/errorType";

export type NewsContextType = {
  data: AxiosResponse<FetchReslutType | ErrorType>;
  setSearchValue: (
    value: string
  ) => React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
};

export const NewsContext = createContext({});

const Provider = ({ children }: Props) => {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue !== "") {
      (async () => {
        const api = new NewsApi();
        const result = await api.search(searchValue);
        setData(result);
      })();
    } else {
      (async () => {
        const api = new NewsApi();
        const result = await api.fetch();
        setData(result);
      })();
    }
  }, [searchValue]);

  return (
    <NewsContext.Provider value={{ data, setSearchValue }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Provider;
