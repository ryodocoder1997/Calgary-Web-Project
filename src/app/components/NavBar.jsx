// Dinh Anh: NavBar component

import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div className='flex justify-between border border-zinc-300 items-center pt-3 pb-3 pr-8 pl-8 bg-background text-zinc-700 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl'>
      <div className='flex flex-col'>
        <p className='text-lg font-primary leading-tight text-foreground'>
          Young Viet
        </p>
        <p className='text-lg font-bold text-primary-600'>@YYC</p>
      </div>
      <div className='flex'>
        <ul className='flex items-center'>
          <li className='mr-10'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mr-10'>
            <Link href='/news'>News</Link>
          </li>
          <li className='mr-1'>
            <Link href='#'>Resources</Link>
          </li>
          <div className='mr-10'>
            <Menu>
              <MenuButton className='flex items-center'>
                <ChevronDownIcon className='size-5 fill-zinc-700' />
              </MenuButton>
              <MenuItems
                transition
                anchor='top'
                className='w-52 mt-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-2xl p-2 shadow-black bg-background text-zinc-700 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
              >
                <MenuItem>
                  <Link
                    href='#'
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Events
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href='#'
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Clubs
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href='#'
                    className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                  >
                    Mentors
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
          <li className='mr-10'>
            <Link href='#'>About Us</Link>
          </li>
        </ul>
        <button className='border border-zinc-300 rounded-3xl pt-2 pb-2 pl-2 pr-5'>
          🔍 Search...
        </button>
      </div>
      <div className='flex'>
        <div className='mr-10'>
          <Menu>
            <MenuButton className='flex items-center'>
              <p className='font-bold'>🌐 EN</p>
            </MenuButton>
            <MenuItems
              transition
              anchor='top right'
              className='w-52 mt-4 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-2xl p-2 shadow-black bg-background text-zinc-700 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0'
            >
              <MenuItem>
                <a
                  href='#'
                  className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                >
                  Vietnamese
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href='#'
                  className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-pink-200'
                >
                  English
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <p>Sign In</p>
      </div>
    </div>
  )
}
