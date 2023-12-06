import React from "react";
import AuthDetails from "./AuthDetails";
import "./Home.css";
import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";
const Home = () => {
  const [news, setnews] = useState([]);
  const gettruth = (ar) => {
    console.log(ar);
  };

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0d495a29b9cf4d43a513d3c23efd2776`;

    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setnews(data.articles));
  }, []);
  console.log(news);
  return (
    <div>
      <div className="navbar">
        <AuthDetails gettruth={gettruth} />
      </div>
      <div>
        <h1>Home</h1>
        <div>
          <h2>Latest</h2>
          {news.map((i, idx) => {
            return (
              <NewsItem
                key={idx}
                title={i.title}
                description={i.description}
                src={i.urlToImage}
                url={i.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
