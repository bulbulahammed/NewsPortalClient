import React from "react";

const NewsDetails = ({ news }) => {
  return (
    <div className="col-md-3">
      <img className="w-100" src={news.image}></img>
      <h2>{news.title}</h2>
    </div>
  );
};

export default NewsDetails;
