import React from 'react';

function DeletePost({ onDelete, postId }) {
  function handleDeleteClick() {
    if (postId) {
      onDelete(postId);
    }
  }

  return (
    <div className="p-2">
      <button 
        onClick={handleDeleteClick} 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-300"
      >
        Delete
      </button>
    </div>
  );
}

export default DeletePost;
