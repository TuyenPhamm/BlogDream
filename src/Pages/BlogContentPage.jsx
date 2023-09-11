import React from 'react';
import { BlogContent, Post } from "../components"
// import Post from '../components/post';
const BlogContentPage = ({ blogs }) => {
  console.log(blogs)

  return (
    <div className='bg-[#e5e7eb]'>
      <div className='992:flex max-w-[1320px] mx-auto  '>
        <div className=' '>
          <BlogContent blogs={blogs} />
        </div>
        <div className=' px-[12px]'>
          <Post blogs={blogs} />
        </div>
      </div>
    </div>
  )
}

export default BlogContentPage