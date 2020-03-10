type SourceType = {
  id: string;
  name: string;
};

export type ArticleType = {
  source: SourceType;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface FetchReslutType {
  status: string;
  totalResults: number;
  articles: [ArticleType];
}

export default ArticleType;
