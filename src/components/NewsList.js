import axios from "axios";
import { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Options from "./Options";

const MenuList = () => {
  const [articles, setArticles] = useState([]);
  const ApiKey = "7fc7aa28d976428ab4a1906e814d6403";
  const [country, setCountry] = useState("gr");
  const [category, setCategory] = useState("business");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${ApiKey}`
      );
      console.log(response.data.articles);
      setArticles(response.data.articles);
    };

    fetchData();
  }, [category, country]);
  return (
    <div className="news-feed">
      <div className="options-bar">
        <Options setCategory={setCategory} setCountry={setCountry} />
      </div>
      <div className="results">
        {articles.map((article) => {
          return (
            <div>
              <NewsItems
                title={article.title}
                author={article.author}
                urlToImage={article.urlToImage}
                description={article.description}
                url={article.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
