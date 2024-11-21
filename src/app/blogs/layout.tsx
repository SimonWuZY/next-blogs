// blogs/layout.tsx
import React from 'react';
import MainPosts from '../components/MainPosts';


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mt-10'>
      <MainPosts/>
      <main>{children}</main>
      <footer>博客专用底部</footer>
    </div>
  );
};

export default BlogLayout;
