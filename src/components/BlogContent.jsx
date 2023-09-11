import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const BlogContent = ({ blogs }) => {
    console.log("Blog Object")

    const { id } = useParams()


    let blog = {}
    if (blog) {
        let arr = blogs.data.filter(blog => blog.id == id)
        blog = arr[0]

    } else {
        blog = {}
    }
    return (
        <div className='w-full bg-[#E5E5E569]'>
            <div className='max-w-[1320px] mx-auto flex flex-row'>
                <div className='px-[12px]'>
                    <div className='col-span-2 '>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`} />
                        <div className='py-[20px]'>
                            <div className='flex '>
                                <div className='flex flex-wrap pr-[20px] border-r-[1px] border-l-[#c4c4c4]'>
                                    <img className='p-2 w-[30px] h-[30px] rounded-full mx-auto object-cover' src={`http://localhost:1337${blog.attributes.useImg.data.attributes.url}`} />
                                    <h1 className=''>{blog.attributes.useName}</h1>
                                </div>
                                <div className='flex flex-wrap pr-[5px]'>
                                    <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-22.svg" alt="" />
                                    <div>{blog.attributes.date}</div>
                                </div>
                                <div className='flex flex-wrap px-[20px] border-l-[1px] border-l-[#c4c4c4]'>
                                    <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-23.svg" alt="" />
                                    <div className=''>{blog.attributes.descTitle}</div>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-semibold text-[24px] mb-[20px] leading-[1.3] '>{blog.attributes.blogTitle}</h1>
                        <div className='pt-5 text-[#685f78]'><ReactMarkdown className='line-break'>{blog.attributes.blogContent}</ReactMarkdown></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogContent