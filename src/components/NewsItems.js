import React from "react";
import "./styles/newsItems.css";
const NewsItems = ({ title, author, urlToImage, description, url }) => {
  return (
    <div className="article">
      <div className="article-image">
        <a href={url}>
          <img src={urlToImage} alt="" />
        </a>
      </div>
      <div>
        <a href={url}>{title}</a>
      </div>
      <div className="description">{description}</div>
      <div className="author">{author}</div>
    </div>
  );
};
export default NewsItems;
