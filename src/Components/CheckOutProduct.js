import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/outline'
import Currency from 'react-currency-formatter'

// Redux
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckOutProduct = ({ item }) => {
  const { id, title, price, description, category, image, rating, hasPrime } =
    item

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    }

    dispatch(addToBasket(product))
  }

  const removeItemToBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} width={200} height={200} objectFit='contain' />
      {/* mid col 3 */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex items-center'>
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <StarIcon className='h-5 text-yellow-400' />
            })}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='GBP' />
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src='https://links.papareact.com/fdw'
              alt=''
            />
          </div>
        )}
      </div>
      {/* right remove add to backet */}
      <div className='flex flex-col space-y-2 my-auto justify-items-end'>
        <button onClick={addItemToBasket} className='button'>
          Add to Basket
        </button>
        <button onClick={removeItemToBasket} className='button'>
          Remove from Cart
        </button>
      </div>
    </div>
  )
}

export default CheckOutProduct
