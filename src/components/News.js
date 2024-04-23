// Components/News.js

import { React, useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";

function News(props) {
  let category = props.category;
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);

  let resultNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    resultNews();
  }, []);

  let fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${
      page + 1
    }&apiKey=${process.env.REACT_APP_API_KEY}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <span>
      <Navbar1 />
      <Navbar2 />

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all ©Souhardya Kundu 22BCE0698</b>
          </p>
        }
      >
        <div className="container">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-lg-4 my-3 w-30 " key={element.url}>
                  <NewsItem
                    className="h-100"
                    sourceName={element.source.name}
                    title={element.title}
                    desc={
                      element.description
                        ? element.description
                        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo amet tempore, molestiae aliquam laboriosam nostrum! Incidunt unde corporis molestias velit?"
                    }
                    imageURL={
                      element.urlToImage ? element.urlToImage : "./news.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </span>
  );
}

export default News;
