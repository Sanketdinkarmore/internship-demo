import React from "react";
import "./BlogPost.css"; // Import CSS for styling
import "./global.css";

const BlogPost = ({ title, author, description, link, imageUrl, hoverText }) => {
  return (
    <div className="blog-post">
      <div
        className="blog-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="hover-overlay">
          <p className="hover-text">{hoverText}</p>
        </div>
      </div>
      <div className="blog-content">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-author">By {author}</p>
        <p className="blog-description">{description}</p>
        <a href={link} className="blog-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
