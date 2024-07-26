import React, { useState } from 'react';

function AddPost({ addPost }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (title && desc) {
      addPost({ id: Date.now(), title, desc });
      setTitle('');
      setDesc('');
    }
  }

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-4 text-yellow-600">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
