// Dinh Anh: NavBar component

import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function NavBar() {
  return (
    <div className='flex justify-between border border-zinc-300 items-center pt-3 pb-3 pr-8 pl-8 bg-zinc-50 text-zinc-700 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
      <div className='flex flex-col'>
        <text className='text-lg font-bold leading-tight text-background'>
          Young Viet
        </text>
        <text className='text-lg font-bold text-primary-600'>@YYC</text>
      </div>
      <div className='flex'>
        <ul className='flex items-center'>
          <li className='mr-10'>
            <a href='#'>Home</a>
          </li>
          <li className='mr-10'>
            <a href='#'>News</a>
          </li>
          <li className='mr-1'>
            <a href='#'>Resources</a>
          </li>
          <div className='mr-10'>
            <Menu>
              <MenuButton className='flex items-center'>
                <ChevronDownIcon className='size-5 fill-zinc-700' />
              </MenuButton>
              <MenuItems
                transition
                anchor='top right'
                className='w-52 mt-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-2xl p-2 shadow-black bg-foreground text-zinc-700 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
              >
                <MenuItem>
                  <a
                    href='#'
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Events
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Clubs
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Mentors
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <li className='mr-10'>
            <a href='#'>About Us</a>
          </li>
        </ul>
        <button className='border border-zinc-300 rounded-3xl pt-2 pb-2 pl-2 pr-5'>
          🔍 Search...
        </button>
      </div>
      <div>
        <text className='mr-10 font-bold'>🌐 EN</text>
        <text>Sign In</text>
      </div>
    </div>
  )
}
