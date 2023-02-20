import React from 'react'
import '../../components/newsletter/styles/style.css'
import { MdOutlineEmail } from 'react-icons/md';

function index() {
    return (
        <>
            <div className='bg-[#EFF2F4] mt-10 p-10 flex items-center justify-center text-center'>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center flex-col gap-1'>
                        <h1 className='font-semibold text-xl'>
                            Subscribe on our newsletter
                        </h1>

                        <p className='font-normal text-[#606060] text-sm'>
                            Get daily news on upcoming offers from many suppliers all over the world
                        </p>


                        <div className='flex items-center justify-center gap-4 mt-5'>
                            <form method="GET">
                                <div className="relative text-[#8B96A5] focus-within:text-gray-400">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <MdOutlineEmail />
                                        </button>
                                    </span>
                                    <input type="search" name="q" className="py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Email" autocomplete="off" />
                                </div>
                            </form>
                            <div className=''>
                                <button className='subscribe-btn py-2 px-4 rounded-lg text-white text-sm'>Subscribe</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default index