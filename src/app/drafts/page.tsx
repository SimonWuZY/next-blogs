"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './style.css';
export default function Drafts() {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <div className='h-screen markdown-body'>
      {/* 标题部分 */}
      <div className='flex flex-col justify-center items-center px-2 mb-5'>
        <div className='text-blue-600 text-[50px] font-extrabold'>开始创作</div>
        <p className='text-blue-400 text[30px] font-medium'>享受记录与分享趣事知识的快乐</p>
      </div>

      {/* 富文本编辑器部分，设置其高度为 100% */}
      <div className='h-full'>
        <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: '100%' }} />
      </div>
    </div>
  );
}
