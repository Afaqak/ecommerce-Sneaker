import React from 'react'
import { ReactComponent as Plus } from '../../assets/images/icon-plus.svg';
import { ReactComponent as Minus } from '../../assets/images/icon-minus.svg';
import { ReactComponent as Cart } from '../../assets/images/icon-cart.svg';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
const SneakerRight = () => {
  const { setCart, cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1)
    if (quantity >= 3) {
      setCart({ ...cart, quantity: quantity + 1, total: `$${(quantity + 1) * 125}`, price: 125 })
    }
  }
  const removeQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      setCart({
        ...cart,
        quantity: quantity - 1,
        price: 125,
        total: quantity * 125
      })
    }
    else {
      setQuantity(0)
    }
  }

  console.log(quantity);
  return (
    <div className='px-3 flex-1 self-center space-y-6 -mt-14 md:mt-0'>
      <div>
        <h2 className='text-[0.74rem] mb-2 md:mt-0 font-bold text-primary font-kumbh'>SNEAKER COMPANY</h2>
        <h1 className='mb-3 uppercase text-xl font-[600]'>
          fall limited edition
          <br />
          sneakers
        </h1>
        <p className='text-sm text-Grayishblue'>
          these low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <div className="flex gap-x-3 items-center">
          <h2 className='text-2xl'>$125</h2>
          <span className='text-primary rounded-[0.25rem] bg-secondary self-center text-[0.7rem] px-2 font-bold' >50%</span>
        </div>
        <h3 className='text-sm text-Grayishblue mr-2'>$250</h3>
      </div>

      <form onClick={(e) => {
        e.preventDefault();
      }}
        className='flex flex-col md:flex-row md:items-center'>
        <div className='flex md:flex-1 rounded-lg py-2 md:w-[30%] bg-Lightgrayishblue px-3 justify-between items-center'>
          <Plus className='cursor-pointer' onClick={() => addQuantity()} />
          <p>{quantity}</p>
          <Minus className='cursor-pointer' onClick={
            () => { removeQuantity() }} />
        </div>
        <button type='submit'
          onClick={(e) => {
            e.preventDefault();
            if (quantity > 0) {
              setCart({
                ...cart,
                quantity: quantity,
                price: 125,
                total: quantity * 125
              })
            }
          }}
          className='bg-primary 
          hover:hover:scale-105 active:-translate-y-1 transition-all duration-500 ease-in-out
          md:flex-2 text-white text-sm mb-4  font-bold py-2 px-3 rounded-[0.25rem] text-white-50 flex items-center justify-center gap-x-4 w-full md:w-[70%] mt-3'>
          <Cart className='fill-white-50' />
          Add to cart</button>
      </form>

    </div>
  )
}

export default SneakerRight;