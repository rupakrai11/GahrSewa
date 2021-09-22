import React, { Fragment } from "react";
import "../../style/blog.css";
import CardData from "./../utill/CardData";
import BlogCard from "./BlogCard";
import Footer from "./../common/Footer";
import Navbar from "./../common/Navbar";
// import Banner from "./../home/Banner";

const Blog = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          {CardData.map((data, id) => {
            return <BlogCard key={id} data={data} />;
          })}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Blog;
