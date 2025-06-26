import Link from 'next/link'
import React from 'react'
import StarSVG from '@/../public/star'

export default function Footer() {
  return (
    <footer className='bg-[#FFFAF2] pt-14 pb-6'>
      <StarSVG />
      <div className='flex justify-between max-w-[1140px] mx-auto border border-secondary-500 pt-3 pb-3 pr-8 pl-8 bg-secondary-100 text-zinc-700 rounded-tl-none rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-none'>
        <div className='flex flex-col pt-4 pb-4 pl-3'>
          <p className='text-2xl font-bold leading-tight text-foreground'>
            Young Viet
          </p>
          <p className='text-2xl font-bold text-primary-600 mb-16'>@YYC</p>
          <p>Contact Info:</p>
          <p>Info@YoungvietYYC.com</p>
        </div>
        <div className='pt-5 pr-3'>
          <div className='grid grid-cols-3 gap-x-9 gap-y-3 text-secondary-700'>
            <Link href='/news' className='text-sm'>
              News
            </Link>
            <Link href='#' className='text-sm'>
              Volunteer
            </Link>
            <Link href='#' className='text-sm'>
              Instagram
            </Link>
            <Link href='#' className='text-sm'>
              Clubs
            </Link>
            <Link href='#' className='text-sm'>
              FAQs
            </Link>
            <Link href='#' className='text-sm'>
              Facabook
            </Link>
            <Link href='#' className='text-sm'>
              Mentor
            </Link>
            <Link href='#' className='text-sm'>
              About Us
            </Link>
            <Link href='#' className='text-sm'>
              Youtube
            </Link>
            <Link href='#' className='text-sm'>
              Events
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
