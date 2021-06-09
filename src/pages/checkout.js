import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'

// Auth
import { useSession } from 'next-auth/client'

// Component
import Header from '../Components/Header'
import CheckOutProduct from '../Components/CheckOutProduct'

// Redux
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'

const Checkout = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()

  return (
    <div className='bg-gray-100'>
      <Header />

      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left Side */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length === 0 ? 'Your basket is emtpy' : 'Shopping basket'}
            </h1>

            {items.map((item, index) => {
              return <CheckOutProduct item={item} key={index} />
            })}
          </div>
        </div>
        {/* Right side */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items): {'  '}
                <span className='font-bold'>
                  <Currency quantity={total} currency='GBP' />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Procees to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
