// blogs/layout.tsx
import React from 'react';
import MainPosts from '@/app/components/MainPosts';
import BlogFooter from '@/app/components/BlogFooter'

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
      <div className='mt-10'>
        <MainPosts />
        <main>{children}</main>
        <BlogFooter />
      </div>

  );
};
