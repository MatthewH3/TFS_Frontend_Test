import axios, { AxiosInstance } from "axios";
import { FetchReslutType } from "typings/newsType";

class NewsApi {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_ENDPOINT || "http://newsapi.org/v2",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY
      } // Insert your own API_KEY
    });
  }

  async fetch() {
    try {
      const result = await this.axios.get<FetchReslutType>("/everything", {
        params: {
          pageSize: 12,
          sortBy: "publishedAt",
          sources: "the-washington-post"
        }
      });
      return result;
    } catch (err) {
      return err.response;
    }
  }

  async search(input: string) {
    try {
      const result = await this.axios.get<FetchReslutType>("/everything", {
        params: {
          pageSize: 12,
          sortBy: "publishedAt",
          sources: "the-washington-post",
          q: encodeURIComponent(input)
        }
      });
      return result;
    } catch (err) {
      return err.response;
    }
  }
}

export default NewsApi;
