import React from 'react';
import { useParams } from 'react-router-dom';
import right from '../assets/right.png';
import search from '../assets/.png';

const Post = ({ blogs }) => {
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
        <div className='bg-[#e5e7eb]'>
            <div className='p-[20px] bg-[#fff] rounded-[10px] mb-[20px] flex '>
                <input className='py-[6px] px-[15px] bg-[#E5E5E569] w-[100%]' type="text" placeholder='Search...' />
                <img className=' bg-[#ff5364] py-[6px] px-[12px] text-[#fff] rounded-[5px]' src={search} alt="" />
            </div>
            <div className='p-[20px] rounded-[10px] bg-[#fff] mb-[20px]'>
                <p className='text-[#0b0b0b] text-[18px] font-bold mb-[20px]'>Recent Posts</p>
                {blogs.data.slice(0, 3).map((blog) =>
                    <div className='flex mb-[20px] '>
                        <div className='  '>
                            <img className='max-w-none w-[80px] h-[80px]' src={`http://localhost:1337${blog.attributes.postImg.data.attributes.url}`} />
                        </div>
                        <div className='pl-[15px] text-[14px] text-[#22100d] font-semibold'>
                            <p >{blog.attributes.blogTitle}</p>
                            <div className='flex pr-[5px]'>
                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-22.svg" alt="" />
                                <div className='text-[14px]'>{blog.attributes.date}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='p-[20px] rounded-[10px] bg-[#fff] mb-[20px]'>
                <p className='text-[#0b0b0b] text-[18px] font-bold mb-[20px]'>Categories</p>
                {blogs.data.map((blog) =>
                    <div className=' flex mb-[20px] items-center'>
                        <img className=' w-[9px] h-[14px] mr-[20px]' src={right} alt="" />
                        <p className='hover:text-[#f66962]'>{blog.attributes.category}</p>
                    </div>
                )}
            </div>
            <div className='p-[20px] rounded-[10px] bg-[#fff] mb-[20px]'>
                <p className='text-[#0b0b0b] text-[18px] font-bold mb-[20px]'>Archives</p>
                {blogs.data.slice(0, 3).map((blog) =>
                    <div className=' flex mb-[20px] items-center'>
                        <img className=' w-[9px] h-[14px] mr-[20px]' src={right} alt="" />
                        <p className='hover:text-[#f66962]'>{blog.attributes.archives}</p>
                    </div>
                )}
            </div>
            <div className='p-[20px] rounded-[10px] bg-[#fff] mb-[20px]'>
                <p className='text-[#0b0b0b] text-[18px] font-bold mb-[20px]'>Latest Tags</p>
                <div className=' flex flex-wrap '>
                    {blogs.data.map((blog) =>
                        <div className='mr-[15px] mb-[15px] bg-[#ffdeda] hover:bg-[#f5cbc5] rounded-[5px] text-[14px] py-[5px] px-[10px] font-medium '>{blog.attributes.LatestTags}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

// const Post = ({ posts }) => {
//     return (
//         <div >
//             <div className='p-[20px] bg-[#fff] rounded-[10px] mb-[20px]'>
//                 <input className='py-[6px] px-[15px] bg-[#E5E5E569]' type="text" placeholder='Search...' />
//                 <button className='bg-[#ff5364] py-[6px] px-[12px] text-[#fff] font-normal'>
//                     Q
//                 </button>
//             </div>
//             <div className='rounded-[10px] bg-[#fff] p-[20px]'>
//                 <p className='text-[#0b0b0b] text-[18px] font-bold'>Recent Posts</p>
//                 {posts.data.map((post) =>
//                     <div className='w-[80px] h-[80px]'>
//                         <img className='relative rounded-[10px] w-[100%] h-auto' src={`http://localhost:1337${post.attributes.postImg.data.attributes.url}`} />
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }



export default Post