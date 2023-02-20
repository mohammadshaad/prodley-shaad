import React from 'react'
import '../../components/cards/styles/style.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineInventory2 } from 'react-icons/md';
import { AiOutlineSend } from 'react-icons/ai';
import { MdOutlineSecurity } from 'react-icons/md';

function index() {
  return (
    <>
      <div className='w-full h-auto p-4 md:px-20 mt-5'>
        <div className='flex items-start justify-center flex-col'>
          <div>
            <h1 className='font-semibold text-xl'>
              Our extra services
            </h1>
          </div>
          <div className='w-full md:h-[200px] mt-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-4'>
            <div className='h-full flex items-center justify-start gap-2 flex-col border border-[#E0E0E0] rounded-lg'>
              <div className='image'>
                <img src={four} alt='services' className='bg-black rounded-xl' />
              </div>
              <div className='p-3 flex items-center justify-between w-full'>
                <p>
                  Source from <br /> Industry Hubs
                </p>
                <a href='/' >
                  <div className='bg-[#D1E7FF] p-4 relative bottom-12 rounded-full border-2 border-white'>
                    <AiOutlineSearch className='text-xl' />
                  </div>
                </a>
              </div>
            </div>
            <div className='h-full flex items-center justify-start gap-2 flex-col border border-[#E0E0E0] rounded-lg'>
              <div className='image'>
                <img src={one} alt='services' className='bg-black rounded-xl' />
              </div>
              <div className='p-3 flex items-center justify-between w-full'>
                <p>
                  Customize Your <br /> Products
                </p>
                <a href='/' >
                  <div className='bg-[#D1E7FF] p-4 relative bottom-12 rounded-full border-2 border-white'>
                    <MdOutlineInventory2 className='text-xl' />
                  </div>
                </a>
              </div>
            </div>
            <div className='h-full flex items-center justify-start gap-2 flex-col border border-[#E0E0E0] rounded-lg'>
              <div className='image'>
                <img src={two} alt='services' className='bg-black rounded-xl' />
              </div>
              <div className='p-3 flex items-center justify-between w-full'>
                <p>
                  Fast, reliable shipping <br /> by ocean or air
                </p>
                <a href='/' >
                  <div className='bg-[#D1E7FF] p-4 relative bottom-12 rounded-full border-2 border-white'>
                    <AiOutlineSend className='text-xl' />
                  </div>
                </a>
              </div>
            </div>
            <div className='h-full flex items-center justify-start gap-2 flex-col border border-[#E0E0E0] rounded-lg'>
              <div className='image'>
                <img src={three} alt='services' className='bg-black rounded-xl' />
              </div>
              <div className='p-3 flex items-center justify-between w-full'>
                <p>
                  Product monitoring <br /> and inspection
                </p>
                <a href='/' >
                  <div className='bg-[#D1E7FF] p-4 relative bottom-12 rounded-full border-2 border-white'>
                    <MdOutlineSecurity className='text-xl' />
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default index