'use client'

import Link from 'next/link'
import React from 'react'
import StarSVG from '@/../public/star'
import ConfettiSVG from '@/../public/confetti'
import { Menus, Socials } from '@/app/constants/global.const'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const resourcesMenu = Menus.find(menu => menu.title === 'Resources')
  const submenuItems = resourcesMenu?.submenuItems || []

  const FooterMenus = [...Menus, ...submenuItems, ...Socials].filter(
    menu => menu.title !== 'Home' && menu.title !== 'Resources',
  )

  return (
    <footer className='bg-[#FFFAF2] pt-14 pb-6'>
      <div className='flex flex-col w-full max-w-[1140px] max-lg:max-w-[770px] max-sm:max-w-[343px] mx-auto'>
        <StarSVG />
        <p className='text-[#432D1D] text-[32px] md:text-[40px] lg:text-[64px] mt-2 mb-6 lg:mb-12 text-wrap'>
          Be part of a vibrant network of Vietnamese students, alumni, and
          mentors.{' '}
          <span className='text-[#F467B4]'>Connect, learn, and thrive</span>{' '}
          with us. Click below to get started!
        </p>
        <div className='self-end'>
          <ConfettiSVG />
        </div>
        <div className='flex sm:flex-row gap-20 flex-col justify-between border border-[#B38B6D] mt-[72px] lg:mt-[172px] mb-8 px-10 py-8 bg-secondary-100 text-zinc-700 rounded-tl-none rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-none'>
          <div className='flex flex-col'>
            <p className='text-2xl font-bold leading-tight text-[#432D1D]'>
              Young Viet
            </p>
            <p className='text-2xl font-bold text-[#F467B4] mb-16'>@YYC</p>
            <p className='text-[#432D1D]'>Contact Info:</p>
            <p className='text-[#7C5538]'>Info@YoungvietYYC.com</p>
          </div>
          <div className='flex'>
            <div className='grid items-center grid-cols-3 gap-x-9 gap-y-3 text-secondary-700'>
              {FooterMenus.map((menu, index) => {
                const isActive = pathname === menu.path
                return (
                  <div key={index}>
                    <Link
                      href={menu.path || '#'}
                      key={index}
                      className={`text-base lg:text-lg font-bold ${isActive ? 'font-semibold' : 'font-normal'}`}
                    >
                      {menu.title}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex justify-between text-[#7C5538]'>
          <p>&copy; 2024 Young Viet YYC. All rights reserved.</p>
          <div className='flex gap-4'>
            <Link href='#' className='underline'>
              Privacy Policy
            </Link>
            <Link href='#' className='underline'>
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
