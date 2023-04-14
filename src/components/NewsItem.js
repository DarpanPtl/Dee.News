import React from "react";
// import apps from "./App.js";

const NewsItem = (props) => {
  let { title, description, imageUrl, readurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <span
          className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
          style={{ marginRight: "-px" }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            !imageUrl
              ? "https://www.hindustantimes.com/ht-img/img/2023/04/02/1600x900/Police-and-firemen-continue-their-search-at-the-ma_1680415051331.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt=""
          style={{ height: 150, width: 287 }}
        />
        <div className={`card-body bg-${props.mode}`}>
          <h5 className="card-title">{title.slice(0, 40)}</h5>
          <p className="card-text">{description.slice(0, 80)}...</p>
          <a
            rel="noreferrer"
            href={readurl}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unkown".slice(0, 6) : author.slice(0, 6)} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
