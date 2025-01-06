// Dinh Anh: Footer component

import React from 'react'

export default function NavBar() {
  return (
    <div className='mt-40 flex justify-between border border-secondary-500 pt-3 pb-3 pr-8 pl-8 bg-secondary-100 text-zinc-700 rounded-tl-none rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-none'>
      <div className='flex flex-col pt-4 pb-4 pl-3'>
        <text className='text-2xl font-bold leading-tight text-foreground'>
          Young Viet
        </text>
        <text className='text-2xl font-bold text-primary-600 mb-16'>@YYC</text>
        <text>Contact Info:</text>
        <text>Info@YoungvietYYC.com</text>
      </div>
      <div className='pt-5 pr-3'>
        <div className='grid grid-cols-3 gap-x-9 gap-y-3 text-secondary-700'>
          <a href='#' className='text-sm'>
            News
          </a>
          <a href='#' className='text-sm'>
            Volunteer
          </a>
          <a href='#' className='text-sm'>
            Instagram
          </a>
          <a href='#' className='text-sm'>
            Clubs
          </a>
          <a href='#' className='text-sm'>
            FAQs
          </a>
          <a href='#' className='text-sm'>
            Facabook
          </a>
          <a href='#' className='text-sm'>
            Mentor
          </a>
          <a href='#' className='text-sm'>
            About Us
          </a>
          <a href='#' className='text-sm'>
            Youtube
          </a>
          <a href='#' className='text-sm'>
            Events
          </a>
        </div>
      </div>
    </div>
  )
}
