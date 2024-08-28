"use client";
import { useEffect, useState } from "react";
import { getNews } from "../Services/NewsApi";

// Define the interface for the news data
interface NewsArticle {
  title: string;
  author?: string;
  description: string;
  urlToImage: string;
  url: string;
  // Add other relevant fields based on your API response
}

const NewsComponent = () => {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const data = await getNews();
        setNewsData(data.articles); // Assuming `data.articles` is the array of news
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching news");
        setIsLoading(false);
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((news, idx) => (
            <div className="card" key={idx} style={{maxWidth:"345px"}}>
              <img src={news.urlToImage} className="card-img-top" alt={news.title} />
              <div className="card-body">
                <h5 className="card-title font-bold px-2">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <a href={news.url} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsComponent;
