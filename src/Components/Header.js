import React from 'react'
// Next component
import Image from 'next/image'

// img icon
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>
      <div className='flex items-center bg-amazon_blue flex-grow p-1 py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex flex-grow items-center rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
          <input
            type='text'
            className='p-4 px-4 h-full flex-grow flex-shrink rounded-l-md focus:outline-none'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello User!</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Return</p>
            <p className='font-extrabold md:text-sm'>& Order</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 left-8 md:right-8 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              2
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden font-extrabold mt-2 md:text-sm md:inline'>
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom header */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-block'>Electronics</p>
        <p className='link hidden lg:inline-block'>Food</p>
        <p className='link hidden lg:inline-block'>Prime</p>
        <p className='link hidden lg:inline-block'>Buy Again</p>
        <p className='link hidden lg:inline-block'>Health & Susided Item</p>
      </div>
    </header>
  )
}

export default Header
