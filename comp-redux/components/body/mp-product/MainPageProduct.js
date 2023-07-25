//front-end
import React from 'react'
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../'
//back-end
import { useState, useRef, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { creds, store } from '../../../backend/firebase'
import { useRouter } from 'next/router'

function MainPageProduct ({
  id,
  productType,
  productImg,
  productName,
  productPrice,
  bestSeller
}) {
  const router = useRouter()

  return (
    <div
      className='
    bg-red-300
    lg:h-[410px]
    h-[370px]
    px-8
    py-10
    m-6
    space-y-2
    lg:max-w-[320px]
    md:max-w-[280px]
    max-w-[250px]
    md:min-w-[290px]
    min-w-[230px]
    flex-grow
    rounded-lg
    grid
    place-items-start
    cursor-poiner
    hover:opacity-90
    hover:scale-105
    hover:shadow-xl
  hover:shadow-blue-300
    transform
    transition
    duration-300
    ease-in-out
    '
    >
      <img
        src='https://i.pinimg.com/originals/2f/9f/7e/2f9f7e134e1be4d0ffd0706cbf1d2ac5.png'
        alt=''
        className='
      h-[190px]
      w-[190px]
     rounded-lg
     border
     border-sky-400
     mx-auto
      '
      />
      <span
        className='
      w-full
       mx-auto
       flex-grow 
       px-3 
       grid
       space-y-2
       place-items-start
       '
      >
        <h3
          className='
        font-google-sans 
        font-normal 
        text-base
        underline 
        text-slate-100'
        >
          HRLA Test Name
        </h3>
        <p
          className='
        font-google-sans 
        font-semibold 
        text-base 
        text-slate-100'
        >
          $10.00
        </p>
      </span>
      <div
        className='
      flex 
      mx-auto 
      items-center 
      px-3 
      py-2
      w-full
      justify-evenly
      '
      >
        <Button
          buttonType='filled'
          size='regular'
          color='blue'
          rounded={false}
          iconOnly={true}
          ripple='light'
          className='capitalize font-robot-slab text-base'
        >
          <Icon name='add_shopping_cart' />
        </Button>
        <Button
          buttonType='filled'
          size='regular'
          color='blueGray'
          rounded={false}
          ripple='light'
          className='capitalize font-robot-slab text-base'
        >
          <Icon name='visibility' />
          <p className='lg:flex hidden'>Info</p>
        </Button>
      </div>
    </div>
  )
}

export default MainPageProduct
