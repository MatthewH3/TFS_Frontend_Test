import React, { useContext } from "react";

import Header from "components/header";
import NewsCard from "components/newsCard";

import ArticleType, { FetchReslutType } from "typings/newsType";
import ErrorType from "typings/errorType";

import { AxiosResponse } from "axios";

import { Row, Col } from "reactstrap";

import NewsProvider, {
  NewsContext,
  NewsContextType
} from "providers/newsProvider";

import style from "assets/styles/app.module.scss";

const NewsContainer = () => {
  const result = useContext(NewsContext);
  const { data } = result as NewsContextType;
  const { data: sucessData } = data as AxiosResponse<FetchReslutType>;
  const { data: errorData, status } = data as AxiosResponse<ErrorType>;

  if (Object.keys(data).length === 0 && data.constructor === Object)
    return <h2>Loading...</h2>;

  if (status >= 300) return <h2>{errorData.message}</h2>;

  return (
    <div className={`${style.container} container`}>
      <Row>
        {sucessData.articles.map((item: ArticleType) => (
          <Col lg={4} md={6} sm={12} key={item.publishedAt}>
            <NewsCard data={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const App = () => {
  return (
    <NewsProvider>
      <Header />
      <NewsContainer />
    </NewsProvider>
  );
};

export default App;
