import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const str2 = props.category.charAt(0).toUpperCase() + props.category.slice(1);

  document.title = `${str2}-dee.News`;

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;
    console.log("articles===========>", articles.length);

    // https: setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();

    props.setProgress(70);

    setArticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setpage(parseData.page);
    setloading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1 //-----------------------------------------
    }&pageSize=${props.pageSize}`; //use for fetch API
    setpage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
  };

  return (
    <>
      <div className={`container my-3 `}>
        <h1
          className={`text-center  text-${
            props.mode === "dark" ? "light" : "dark" //////////////////////////------------------------------
          }`}
          style={{ margin: "70px 0px", marignTop: "0px" }}
        >
          dee.News - Top Headlines Related to {props.category}
        </h1>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row d-flex align-items-center">
            {articles.map((element) => {
              return (
                <div className={`col-md-4 `} key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    readurl={element.url}
                    newsUrl={element.newsUrl}
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );

  // News.defaultProp = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // };
  // News.propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
};

export default News;
