import React from 'react';
import MainLayout from '../layouts/MainLayout.tsx';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the Hidden Gems of Paris',
      date: 'September 15, 2023',
      author: 'John Doe',
      content:
        'Paris, often known as the City of Light, boasts an enchanting blend of history, culture, and art. In our latest exploration, we uncover the hidden gems tucked away in the bustling streets of this iconic city. From charming cafés to lesser-known landmarks, join us on a journey through the heart of Paris.',
    },
    {
      id: 2,
      title: 'A Guide to Experiencing Tokyo Like a Local',
      date: 'August 28, 2023',
      author: 'Jane Smith',
      content:
        'Tokyo, a city that seamlessly merges tradition with modernity, offers an array of experiences for travelers. In this comprehensive guide, we delve into the local insights, must-visit neighborhoods, authentic dining spots, and off-the-beaten-path attractions that allow you to embrace Tokyo\'s culture and immerse yourself in the local way of life.',
    },
  ];

  return (
    <MainLayout>
      <div className="blog-content">
        <h1>City Trekker Blog</h1>
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-meta">
              Published on {post.date} by {post.author}
            </p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default BlogPage;
