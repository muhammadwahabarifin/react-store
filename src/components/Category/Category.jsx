import React from 'react'
import Image1 from '../../assets/category/earphone.png'
import Image2 from '../../assets/category/watch.png'
import Image3 from '../../assets/category/macbook.png'
import Button from '../Shared/Button'

const Category = () => {
    return (
        <>
            {/* category section */}
            <div className='py-8'>
                <div className="container">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* first col */}
                        <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-gray-400'>Best</p>
                                    <p className='text-2xl mb-[2px] font-semibold'>Selling</p>
                                    <p className='text-4xl xl:text-5xl mb-3 opacity-20 font-bold'>Earphones</p>
                                    <Button
                                        text='browser'
                                        bgColor={'bgPrimary'}
                                        textColor={'text-white'}
                                    />
                                </div>
                            </div>
                            <img
                                src={Image1}
                                alt="earphones"
                                className='w-[320px] absolute bottom-8'
                            />
                        </div>
                        {/* second col */}
                        <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-white'>Best</p>
                                    <p className='text-2xl font-semibold mb-[2px]'>Selling</p>
                                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Watches</p>
                                    <Button
                                        text='browser'
                                        bgColor={"bg-white"}
                                        textColor={'text-[#E8960F]'}
                                    />
                                </div>
                            </div>
                            <img
                                src={Image2}
                                alt="watch"
                                className='w-[320px] absolute -right-16 lg:top-[12px]'
                            />
                        </div>
                        {/* third col */}
                        <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl relative h-[320px] flex items-end'>
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-white'>Best</p>
                                    <p className='text-2xl font-semibold mb-[2px]'>Selling</p>
                                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3'>Laptops</p>
                                    <Button
                                        text='browser'
                                        bgColor={'bg-white'}
                                        textColor={'text-primary'}
                                    />
                                </div>
                            </div>
                            <img
                                src={Image3}
                                alt="macbook"
                                className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
