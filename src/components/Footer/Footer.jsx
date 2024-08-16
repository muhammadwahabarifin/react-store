/* eslint-disable no-unused-vars */
import React from 'react'
import { BsPersonVcardFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa';
import ScrollToTop from "react-scroll-to-top";

const FooterLinks = [
    {
        title: 'Home',
        link: "/#",
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#contact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    },
];

const FooterInformation = [
    {
        title: 'Terms & Conditions',
        link: '#/',
    },
    {
        title: 'Style Guide',
        link: '#/',
    },
    {
        title: 'Changelog',
        link: '#/',
    },
    {
        title: 'Licenses',
        link: '#/',
    },
];

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a
                            href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            My Store
                        </a>
                        <p className='text-gray-400 dark:text-white/70 lg:pr-24 pt-3'>
                            A gadget cannot capture what a soul has experienced. Beyond the
                            gadget there is a world of humans that can take away your gadget
                            as soon as you misuse it.
                        </p>
                        <p className='text-gray-400 mt-4'>
                            build bg mudarass nazir
                        </p>
                        <a
                            href="https://github.com"
                            target='_blank'
                            className='inline-block bg-primary/95 text-white py-3 px-6 mt-4 text-sm rounded-full font-bold hover:bg-primary/60 duration-200'
                        >
                            visit github to explore more projects
                        </a>
                    </div>

                    {/* footer links */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>
                                Company 
                            </h1>
                            <ul className='space-y-3'>
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* second col links */}
                        <div className="px4 py-8">
                            <h1 className='text-xl font-bold sm:text-left mb-3'>
                            Information
                            </h1>
                            <ul className='space-y-3'>
                                {FooterInformation.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                            className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'
                                        >
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* company adress */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Addresss</h1>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>WahabArf, Indonesia</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+62 065 023452</p>
                            </div>

                            {/* social links */}
                            <div className='flex items-center gap-5 mt-7'>
                                <a href="https://github.com" target='_blank'>
                                    <FaGithub className='text-3xl hover:text-primary duration-200' />
                                </a>
                                <a href="https://github.com" target='_blank'>
                                    <FaLinkedin className='text-3xl hover:text-primary duration-200' />
                                </a>
                                <a href="https://github.com" target='_blank'>
                                    <FaTwitter className='text-3xl hover:text-primary duration-200' />
                                </a>
                                <a href="https://github.com" target='_blank'>
                                    <BsPersonVcardFill className='text-3xl hover:text-primary duration-200' />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ScrollToTop smooth className='bg-primary flex justify-center items-center'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
