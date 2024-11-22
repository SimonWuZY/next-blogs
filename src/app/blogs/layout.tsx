"use client"
import React from 'react';
import MainPosts from '@/app/components/MainPosts';
import BlogFooter from '@/app/components/BlogFooter';
import { usePathname } from 'next/navigation';

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMainBlogPage = pathname === '/blogs';

  return (
    <div className='mt-10'>
      {isMainBlogPage && <MainPosts />}
      <main>{children}</main>
      {isMainBlogPage && <BlogFooter />}
    </div>
  );
}

