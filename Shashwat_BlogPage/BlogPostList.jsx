import React from "react";
import BlogPost from "./BlogPost";
import "./BlogPostList.css";
import "./global.css";

const BlogPostList = () => {
  const posts = [
    {
      title: "The Importance of Documentation for Web Developers",
      author: "Thoriq Firdaus",
      description: "Documentation plays an important role...",
      link: "/post1",
      imageUrl: "https://via.placeholder.com/300x200",
      hoverText: "Learn more about Documentation!",
    },
    {
      title: "20 Free SVG Tools for Better Graphics",
      author: "Agus",
      description: "SVG is gaining popularity in web design...",
      link: "/post2",
      imageUrl: "https://via.placeholder.com/300x200",
      hoverText: "Explore SVG tools!",
    },
    {
      title: "20 Free SVG Tools for Better Graphics",
      author: "Agus",
      description: "SVG is gaining popularity in web design...",
      link: "/post2",
      imageUrl: "https://via.placeholder.com/300x200",
      hoverText: "Explore SVG tools!",
    },
    {
      title: "20 Free SVG Tools for Better Graphics",
      author: "Agus",
      description: "SVG is gaining popularity in web design...",
      link: "/post2",
      imageUrl: "https://via.placeholder.com/300x200",
      hoverText: "Explore SVG tools!",
    },
    {
      title: "20 Free SVG Tools for Better Graphics",
      author: "Agus",
      description: "SVG is gaining popularity in web design...",
      link: "/post2",
      imageUrl: "https://via.placeholder.com/300x200",
      hoverText: "Explore SVG tools!",
    },
    {
      title: "20 Free SVG Tools for Better Graphics",
      author: "Agus",
      description: "SVG is gaining popularity in web design...",
      link: "/post2",
      imageUrl: "https://via.placeholder.com/300x200",
      hoverText: "Explore SVG tools!",
    },
  ];

  return (
    <div className="blog-post-list">
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogPostList;
