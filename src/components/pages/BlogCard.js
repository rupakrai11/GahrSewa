import React, { Fragment } from "react";

const BlogCard = ({ data: { image, c_name, des } }) => {
  return (
    <Fragment>
      <div className="col-md-4">
        <article className="article-entry">
          <a href="">
            <img src={image} alt="" className="blog-img" width="100%" />
          </a>
          <div className="desc">
            <p className="admin">
              <span className="fa fa-star checked" aria-hidden="true"></span>
              <span className="fa fa-star" aria-hidden="true"></span>
              <span className="fa fa-star" aria-hidden="true"></span>
              <span className="fa fa-star" aria-hidden="true"></span>
              <span className="fa fa-star" aria-hidden="true"></span>
            </p>
            <h2>
              <a href="blog.html">{c_name} </a>
            </h2>

            <p>{des}</p>
          </div>
        </article>
      </div>
    </Fragment>
  );
};

export default BlogCard;
