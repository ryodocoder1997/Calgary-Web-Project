// Dinh Anh: NavBar component

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NavBar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [checkLanguageType, setCheckLanguageType] = useState(false)

  const Menus = [
    { title: 'Home', path: '/' },
    { title: 'News', path: '/news' },
    {
      title: 'Resources',
      submenu: true,
      submenuItems: [
        { title: 'Events', path: 'events' },
        { title: 'Clubs', path: '/clubs' },
        { title: 'Mentors', path: '/mentors' },
      ],
    },
    { title: 'About Us', path: '/aboutus' },
  ]

  const Languages = [{ title: 'Vietnamese' }, { title: 'English' }]

  const MobileMenus = [
    { title: 'Home', path: '/' },
    { title: 'News', path: '/news' },
    { title: 'Events', path: 'events' },
    { title: 'Clubs', path: '/clubs' },
    { title: 'Mentors', path: '/mentors' },
    { title: 'About Us', path: '/aboutus' },
  ]

  return (
    <div className='flex flex-col sticky mx-auto items-center text-zinc-700 max-w-[1140px] h-[76px] max-lg:max-w-[834px] max-lg:h-fit max-sm:max-w-[375px] max-sm:h-fit'>
      <div
        className={`flex sticky justify-between my-3 px-5 py-2.5 w-full max-w-[1140px] h-[76px] items-center bg-white text-zinc-700 border ${isMobileMenuOpen && 'border-b-0 rounded-bl-none rounded-br-none'} rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl max-lg:max-w-[834px] max-lg:h-fit max-lg:mb-0 max-sm:max-w-[375px] max-sm:h-fit`}
      >
        <div className='max-w-[252px]'>
          <Link href='/'>
            <Image
              src='/weblogo.svg'
              alt='Young Viet Calgary (YYC) Logo'
              width={100}
              height={44}
            />
          </Link>
        </div>
        <div className='lg:flex max-w-[535px] items-center hidden'>
          <ul className='flex justify-between items-center'>
            {Menus.map((menu, index) => {
              return (
                <div key={index}>
                  <Link href={menu.path || '#'}>
                    <li className='px-4 py-4 mr-2 min-h-11 text-center'>
                      <span
                        className={`inline-flex text-base font-medium flex-1 items-center`}
                      >
                        {menu.title}
                      </span>
                      {menu.title === 'Resources' && (
                        <button
                          onClick={() => {
                            setIsSubMenuOpen(!isSubMenuOpen)
                          }}
                        >
                          <Image
                            src='downarrow.svg'
                            alt='Down arrow for the dropdown menu'
                            width={18}
                            height={18}
                            className={`inline-flex ml-1 ${isSubMenuOpen ? 'rotate-180' : ''} duration-200`}
                          />
                        </button>
                      )}
                    </li>
                  </Link>
                  {menu.submenu && isSubMenuOpen && (
                    <ul className='absolute inline left-auto w-48 p-2 bg-white shadow-lg shadow-black rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
                      {menu.submenuItems.map((submenuItem, index) => (
                        <Link
                          href={submenuItem.path}
                          key={index}
                          className='flex justify-between items-center hover:bg-pink-200 rounded-md group'
                        >
                          <li>
                            <div className='block px-4 py-2'>
                              {submenuItem.title}
                            </div>
                          </li>
                          <Image
                            src='rightarrow.svg'
                            alt='Right arrow in the dropdown menu'
                            width={18}
                            height={18}
                            className='mr-3 hidden group-hover:block'
                          />
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </ul>
          <button className='flex px-2 py-2 ml-2 w-[120px] border rounded-3xl'>
            <Image
              src='magnifyingglass.svg'
              alt='Search Icon'
              width={24}
              height={24}
              className='mr-1'
            />
            Search...
          </button>
        </div>
        <div className='flex max-w-[252px] justify-end items-center'>
          <div className='pr-2 w-[66px] lg:flex hidden'>
            <button
              onClick={() => {
                setIsLanguageMenuOpen(!isLanguageMenuOpen)
              }}
            >
              <p className='flex font-bold'>
                <Image
                  src='globe.svg'
                  alt='Globe icon for changing languages'
                  width={24}
                  height={24}
                  className='mr-1'
                />
                EN
              </p>
            </button>
            {isLanguageMenuOpen && (
              <ul className='absolute inline top-16 right-1 w-48 p-2 bg-white shadow-lg shadow-black rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
                {Languages.map((language, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center hover:bg-pink-200 rounded-md group'
                  >
                    <li className='block px-4 py-2'>{language.title}</li>
                  </div>
                ))}
              </ul>
            )}
          </div>
          <p className='w-[77px] lg:flex hidden'>Sign In</p>
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            className='lg:hidden flex'
          >
            <Image
              src='dropdownicon.svg'
              alt='Icon for dropdown menu'
              width={44}
              height={44}
            />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className='flex flex-col w-full p-2 bg-white border border-t-0 rounded-bl-2xl rounded-br-2xl'>
          {MobileMenus.map((mobilemenu, index) => (
            <Link
              href={mobilemenu.path}
              key={index}
              className='self-center mb-2 w-full hover:bg-pink-200 rounded-md group'
            >
              <li className='text-center px-4 py-2'>{mobilemenu.title}</li>
            </Link>
          ))}
          <button className='flex self-center mt-2 pl-2 pr-24 py-2 border rounded-3xl'>
            <Image
              src='magnifyingglass.svg'
              alt='Search Icon'
              width={24}
              height={24}
              className='mr-1'
            />
            Search...
          </button>
          <div className='flex justify-center mt-16 mb-8'>
            <div className='pr-10'>
              <button
                onClick={() => {
                  setCheckLanguageType(!checkLanguageType)
                }}
              >
                {checkLanguageType === false ? (
                  <p className='flex font-bold'>
                    <Image
                      src='globe.svg'
                      alt='Globe icon for changing languages'
                      width={24}
                      height={24}
                      className='mr-1'
                    />
                    EN
                  </p>
                ) : (
                  <p className='flex font-bold'>
                    <Image
                      src='globe.svg'
                      alt='Globe icon for changing languages'
                      width={24}
                      height={24}
                      className='mr-1'
                    />
                    VI
                  </p>
                )}
              </button>
              {isLanguageMenuOpen && (
                <ul className='w-48 p-2 bg-white shadow-lg shadow-black rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
                  {Languages.map((language, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center hover:bg-pink-200 rounded-md group'
                    >
                      <li className='block px-4 py-2'>{language.title}</li>
                    </div>
                  ))}
                </ul>
              )}
            </div>
            <p className=''>Sign In</p>
          </div>
        </ul>
      )}
    </div>
  )
}

export default NavBar
