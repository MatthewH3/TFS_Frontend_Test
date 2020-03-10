import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import { ArticleType } from "typings/newsType";

import Placeholder from "assets/images/placeholder.png";

import moment from "moment";

import style from "assets/styles/components/newsCard.module.scss";

type Props = {
  data: ArticleType;
};

const NewsCard = ({ data }: Props) => {
  const {
    source,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content
  } = data;

  const translatePublishedAt = (input: string) => {
    const momentDate = moment(input);
    return momentDate.format("YYYY-MM-DD LT");
  };

  return (
    <div className={style.cardContainer}>
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <Card className={style.card}>
          <CardBody>
            <Row>
              <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                <div className={style.avatar}>T</div>
              </Col>
              <Col>
                <CardTitle className={style.sourceTitle}>
                  {source.name}
                </CardTitle>
                <CardSubtitle>{translatePublishedAt(publishedAt)}</CardSubtitle>
              </Col>
            </Row>
          </CardBody>
          <CardImg top src={urlToImage || Placeholder} alt={description} />
          <CardBody>
            <CardTitle className={style.articleTitle}>
              {title.length > 60 ? `${title.substring(0, 58)}...` : title}
            </CardTitle>
            <CardText>
              {content.length > 100
                ? `${content.substring(0, 100)}...`
                : content}
            </CardText>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default NewsCard;
