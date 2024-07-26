import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);

  function handleEdit(updatedPost) {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    );
  }

  function handleAddPost(newPost) {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  }

  function handleDelete(postId) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AddPost addPost={handleAddPost} />
        <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
