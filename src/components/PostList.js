import React from 'react';
import Post from './Post';

const posts = [
  {
    id: 1,
    image: 'images/image1.jpg', // Correct relative path to your images
  },
  {
    id: 2,
    image: 'images/image2.jpg', // Correct relative path to your images
  },
  // Add more posts here
];

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;