import React, { useState } from 'react';

function PostList({ posts, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);

  function handleEdit(post) {
    setCurrentPost({ ...post });
    setIsEditing(post.id);
  }

  function handleSave() {
    if (currentPost) {
      onEdit(currentPost);
      setIsEditing(null);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  function handleDelete(postId) {
    onDelete(postId);
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg p-4">
            {isEditing === post.id ? (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-yellow-600">Edit Post</h2>
                <input
                  type="text"
                  name="title"
                  value={currentPost.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                <textarea
                  name="desc"
                  value={currentPost.desc}
                  onChange={handleChange}
                  placeholder="Description"
                  className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                />
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(null)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-700 mb-4">{post.desc}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default PostList;
