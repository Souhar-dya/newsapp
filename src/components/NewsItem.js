// Components/NewsItem.js

import React from "react";

function NewsItem(props) {
  let { desc, title, imageURL, newsUrl, sourceName } = props;
  return (
    <div className="card my-3 h-100 w-30">
      <img src={imageURL} className="card-img-top h-custom" alt="..." />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="w-100 fs-6 text-body-secondary text-end">
          - {sourceName}
        </p>
        <p className="card-text">{desc}</p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary btn-sm mt-auto"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
