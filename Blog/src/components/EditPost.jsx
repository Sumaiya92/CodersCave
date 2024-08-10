import React, { useState } from 'react';

function Post({ post, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   // Reset title and desc when post changes
  //   setTitle(post.title);
  //   setDesc(post.desc);
  // }, [post]);

  // Function to save the edited post
  function handleSave() {
    onEdit({ id: post.id, title, desc });
    setIsEditing(false);
  }

  // Function to handle multiple actions
  function handleEditClick() {
    setIsEditing(true);
    handleButtonClick(); // Call additional actions
  }

  // Function for additional actions on button click
  function handleButtonClick() {
    console.log('Edit button clicked');
    setIsClicked(true);
  }

  // Function to cancel editing
  function handleCancel() {
    setTitle(post.title);
    setDesc(post.desc);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Post;
