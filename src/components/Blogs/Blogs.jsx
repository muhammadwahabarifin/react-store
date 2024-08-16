import React from 'react'
import Heading from '../Shared/Heading'

//import images
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores lorem eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Mar 2, 2024 by Muhammad Wahab",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores lorem eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Mar 2, 2024 by Muhammad Wahab",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores lorem eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Mar 2, 2024 by Muhammad Wahab",
    image: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div id='blog'>
      <div className="container">
        {/* Header Section */}
        <Heading
          title='Recent Blogs'
          subtitle={"Explore Our Blogs"}
          textColor={'from-violet-200  to-indigo-600 bg-gradient-to-r bg-clip-text text-transparent'}
        />

        {/* Blog Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {/* Blog Card */}
          {BlogData.map((data) => (
            <div
              key={data.title}
              data-aos='fade-up'
              data-aos-delay={data.aosDelay}
              className='bg-white dark:bg-gray-900'
            >
              {/* image section */}
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img
                  src={data.image}
                  alt='image'
                  className='w-full h-[220px] object-cover rounded-2xl hover:scale-110 duration-500'
                />
              </div>
              {/* content section */}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
