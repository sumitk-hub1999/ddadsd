import React from "react";

const NewsItem = (props) => {
  console.log(props);
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <h1>{props.key}</h1> <h5>{props.title}</h5>
      <div className="card-img-top">
        <img src={props.src} alt="" />
      </div>
      <div className="card bg-dark">{props.description}</div>
      <a href={props.url}>Readmore</a>
    </div>
  );
};

export default NewsItem;
