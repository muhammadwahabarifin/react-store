import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../Shared/Button'

const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <div>
            {orderPopup && (
                <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-md'>
                    <div className='w-[350px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white rounded-xl duration-200'>
                        {/* header section */}
                        <div className='flex items-center justify-between tracking-widest font-sans font-semibold text-lg'>
                            <h1 className='capitalize'>place your order:</h1>
                            <div>
                                <IoCloseOutline
                                    onClick={handleOrderPopup}
                                    className='text-2xl cursor-pointer'
                                />
                            </div>
                        </div>

                        {/* form section */}
                        <div className='mt-4'>
                            <input
                                type="text"
                                placeholder='full name'
                                className='form-input'
                            />
                            <input
                                type="tel"
                                placeholder='mobile number'
                                className='form-input'
                            />
                            <input
                                type="email"
                                placeholder='email'
                                className='form-input'
                            />
                            <input
                                type="text"
                                placeholder='address'
                                className='form-input'
                            />
                            <input
                                type="text"
                                placeholder='item code'
                                className='form-input'
                            />
                            <input
                                type="text"
                                placeholder='full name'
                                className='form-input'
                                required
                            />
                            <div className='flex justify-center'>
                                <Button
                                    text='order now'
                                    bgColor={'bg-primary'}
                                    textColor={'text-white'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
