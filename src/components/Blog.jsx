import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({ blogs }) => {

    console.log("Blog Object")
    console.log(blogs)
    return (
        <div className='w-full bg-[#f9f9f9] py-[80px]'>
            <div className=' mx-auto px-[12px] max-w-[1320px] max-1400:w-[1140px] max-1200:w-[960px] max-992:w-[100%]'>
                {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 text-black'> */}
                <div className='grid grid-cols-3 max-992:grid-cols-2 max-768:grid-cols-1 text-black'>
                    <div>
                        {blogs.data.slice(0, 2).map((blog) =>
                            <div className=' rounded-xl '>
                                <div className='px-[12px]'>
                                    <div className=''>
                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <img className='relative rounded-[10px] w-[100%] h-auto' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                                        </Link>
                                    </div>
                                    <div className='p-[15px] mx-[10px] relative mt-[-20px] bg-[#fff] rounded-[10px]'>
                                        <div className='flex text-[12px] font-normal mb-[20px]'>
                                            <div className='flex pr-[5px]'>
                                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-22.svg" alt="" />
                                                <div>{blog.attributes.date}</div>
                                            </div>
                                            <div className='flex px-[5px] border-l-[1px]  border-l-[#c4c4c4]'>
                                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-23.svg" alt="" />
                                                <div>{blog.attributes.descTitle}</div>
                                            </div>
                                        </div>
                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <h3 className='font-semibold text-[24px] mb-[20px] leading-[1.3]'>{blog.attributes.blogTitle}</h3>
                                        </Link>
                                        <p className='text-[#685f78] text-[14px] mb-[20px] font-normal'>{blog.attributes.blogDesc}</p>

                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <button className='font-normal leading-normal text-[16px] rounded-[5px] text-white border-[1px] border-[#ff875a] hover:bg-white hover:text-[#ff875a] py-[9px] px-[28px] bg-[#ff875a] text-center '>
                                                Read More
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>


                        )}
                    </div>
                    <div>
                        {blogs.data.slice(2, 4).map((blog) =>
                            <div className=' rounded-xl '>
                                <div className='px-[12px]'>
                                    <div className=''>
                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <img className='relative rounded-[10px] w-[100%] h-auto' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                                        </Link>
                                    </div>
                                    <div className='p-[15px] mx-[10px] relative mt-[-20px] bg-[#fff] rounded-[10px]'>
                                        <div className='flex text-[12px] font-normal mb-[20px]'>
                                            <div className='flex pr-[5px]'>
                                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-22.svg" alt="" />
                                                <div>{blog.attributes.date}</div>
                                            </div>
                                            <div className='flex px-[5px] border-l-[1px]  border-l-[#c4c4c4]'>
                                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-23.svg" alt="" />
                                                <div>{blog.attributes.descTitle}</div>
                                            </div>
                                        </div>
                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <h3 className='font-semibold text-[24px] mb-[20px] leading-[1.3]'>{blog.attributes.blogTitle}</h3>
                                        </Link>
                                        <p className='text-[#685f78] text-[14px] mb-[20px] font-normal'>{blog.attributes.blogDesc}</p>

                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <button className='font-normal leading-normal text-[16px] rounded-[5px] text-white border-[1px] border-[#ff875a] hover:bg-white hover:text-[#ff875a] py-[9px] px-[28px] bg-[#ff875a] text-center '>
                                                Read More
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>


                        )}
                    </div>
                    <div>
                        {blogs.data.slice(4, 6).map((blog) =>
                            <div className=' rounded-xl '>
                                <div className='px-[12px]'>
                                    <div className=''>
                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <img className='relative rounded-[10px] w-[100%] h-auto' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                                        </Link>
                                    </div>
                                    <div className='p-[15px] mx-[10px] relative mt-[-20px] bg-[#fff] rounded-[10px]'>
                                        <div className='flex text-[12px] font-normal mb-[20px]'>
                                            <div className='flex pr-[5px]'>
                                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-22.svg" alt="" />
                                                <div>{blog.attributes.date}</div>
                                            </div>
                                            <div className='flex px-[5px] border-l-[1px]  border-l-[#c4c4c4]'>
                                                <img className='mr-[9px]' src="https://dreamslms.dreamguystech.com/html/assets/img/icon/icon-23.svg" alt="" />
                                                <div>{blog.attributes.descTitle}</div>
                                            </div>
                                        </div>
                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <h3 className='font-semibold text-[24px] mb-[20px] leading-[1.3]'>{blog.attributes.blogTitle}</h3>
                                        </Link>
                                        <p className='text-[#685f78] text-[14px] mb-[20px] font-normal'>{blog.attributes.blogDesc}</p>

                                        <Link key={blog.id} to={`/blog/${blog.id}`}>
                                            <button className='font-normal leading-normal text-[16px] rounded-[5px] text-white border-[1px] border-[#ff875a] hover:bg-white hover:text-[#ff875a] py-[9px] px-[28px] bg-[#ff875a] text-center '>
                                                Read More
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>


                        )}</div>
                </div>

            </div>
            <div className='flex justify-center'>
                <button className='py-[9px] px-[48px]  bg-[#ff5364] hover:bg-[#ed4051] text-white rounded-[5px] mt-[25px] text-[18px] font-bold'>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default Blogs