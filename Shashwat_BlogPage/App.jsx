import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageSection from './components/ImageSection';
import BlogPostList from "./components/BlogPostList";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <ImageSection />
        <SearchBar />
        <Routes>
          <Route path="/search" element={<h2 className="text-center">Search Results</h2>} />
        </Routes>
         <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post1" element={<div>Post 1 Content</div>} />
        <Route path="/post2" element={<div>Post 2 Content</div>} />
        <Route path="/post3" element={<div>Post 3 Content</div>} />
        <Route path="/post4" element={<div>Post 4 Content</div>} />
        <Route path="/post4" element={<div>Post 5 Content</div>} />
        <Route path="/post4" element={<div>Post 6 Content</div>} /> 
      </Routes>
      </div>
    </Router>
  );
};

export default App;












