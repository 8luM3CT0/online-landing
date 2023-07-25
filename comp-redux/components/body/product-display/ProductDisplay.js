//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useState } from 'react'
import { creds, store } from '../../../backend/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

function ProductDisplay ({
  id,
  productImg,
  productName,
  productPrice,
  productType,
  productAdder,
  adderOn
}) {
  return (
    <>
      <div
        key={id}
        className='productDiv
        group
    '
      >
        {productImg ? (
          <div
            style={{
              backgroundImage: `url(${productImg})`
            }}
            className='
     h-[210px]
     w-full
     place-self-center
     bg-cover
     bg-no-repeat
     bg-slate-800
     rounded-lg
     border
     border-red-100
     shadow-lg
     '
          />
        ) : (
          <div
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/2f/9f/7e/2f9f7e134e1be4d0ffd0706cbf1d2ac5.png)`
            }}
            className='
     h-[210px]
     w-full
     place-self-center
     rounded-lg
     bg-cover
     bg-no-repeat
     bg-slate-800
     border
     border-red-100
     shadow-lg
     '
          />
        )}
        <div
          className='
      w-full
      justify-between
      px-2
      flex
      items-center
      '
        >
          {/**Product name & type */}
          <div
            className='
          grid 
          space-y-2 
          place-items-start'
          >
            <h1
              className='
    text-xl
    font-robot-slab
    font-normal
    text-slate-500 
    underline
    group-hover:text-slate-700
    duration-300
    transform
    transition
    ease-in-out
    '
            >
              {productName}
            </h1>
            <h1
              className='
    text-2xl
    font-robot-slab
    font-semibold
    text-slate-600
    group-hover:text-slate-800
    duration-300
    transform
    transition
    ease-in-out
    '
            >
              Php {productPrice}
            </h1>
          </div>
          {/**Buttons */}
          <div className='grid space-y-2 place-items-end'>
            <Button
              color='blueGray'
              buttonType='filled'
              iconOnly={true}
              size='sm'
              ripple='light'
            >
              <Icon name='info' />
            </Button>
            <Button
              color='blue'
              buttonType='filled'
              size='sm'
              ripple='light'
              className='text-base font-semibold font-ibm-sans capitalize'
            >
              <Icon name='add_shopping_cart' />
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay
