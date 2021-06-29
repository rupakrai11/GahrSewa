import React, { Fragment } from "react";
import "../../style/blog.css";
import CardData from "./../utill/CardData";
import BlogCard from "./BlogCard";
const Blog = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {CardData.map((data, id) => {
            return <BlogCard key={id} data={data} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
