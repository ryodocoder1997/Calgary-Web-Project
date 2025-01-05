// Dinh Anh: NavBar component

import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function NavBar() {
  return (
    <div className='flex justify-between border items-center pt-3 pb-3 pr-8 pl-8 bg-[background] text-[var(--nav-text)] rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
      <div className='flex flex-col'>
        <text className='text-lg font-bold text-black'>Young Viet</text>
        <text className='text-lg font-bold text-pink-400'>@YYC</text>
      </div>
      <div className='flex'>
        <ul className='flex items-center'>
          <li className='mr-10'>
            <a href='#' className='text-lg'>
              Home
            </a>
          </li>
          <li className='mr-10'>
            <a href='#' className='text-lg'>
              News
            </a>
          </li>
          <li className='mr-1'>
            <a href='#' className='text-lg'>
              Resources
            </a>
          </li>
          <div className='mr-10'>
            <Menu>
              <MenuButton className='flex items-center'>
                <ChevronDownIcon className='size-5 fill-[52525b]' />
              </MenuButton>
              <MenuItems
                transition
                anchor='top right'
                className='w-52 mt-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-2xl p-2 shadow-black bg-[background] text-[var(--nav-text)] transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
              >
                <MenuItem>
                  <a
                    href='#'
                    className='group text-lg flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Events
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='group flex text-lg w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Clubs
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='group flex text-lg w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Mentors
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <li className='mr-10'>
            <a href='#' className='text-lg'>
              About Us
            </a>
          </li>
        </ul>
        <button className='border rounded-3xl pt-2 pb-2 pl-2 pr-5 text-lg'>
          🔍 Search...
        </button>
      </div>
      <div>
        <text className='mr-10 font-bold'>🌐 EN</text>
        <text className='text-lg font-bold'>Sign In</text>
      </div>
    </div>
  )
}
