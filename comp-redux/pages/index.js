//front-end
import Head from 'next/head'
import {
  MainHeader,
  HeaderRoutes,
  ProductDisplay,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Icon,
  MainPageProduct
} from '../components/'
//back-end
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../backend/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home () {
  const [user] = useAuthState(creds)
  //featured products

  return (
    <div className='bg-gray-50 overflow-y-scroll scrollbar-hide h-screen'>
      <Head>
        <title>Comp Redux</title>
      </Head>

      <MainHeader />
      <HeaderRoutes />
      <main
        className='
      h-screen
      max-w-7xl
      mx-auto
      space-y-2
      bg-gray-300
      overflow-y-scroll
      scrollbar-thin
      scrollbar-track-sky-200
      scrollbar-thumb-sky-500
      grid
      '
      >
        {/**Banner */}
        <div
          className='bannerDiv
      '
        >
          {/**Input div */}
          <div
            className='inputDiv
        '
          >
            <input
              type='text'
              placeholder='Search for an item...'
              className='
          bg-transparent
          border-0
          outline-none
          text-gray-600
          font-robot-slab
          font-normal
          px-3
          w-full
          '
            />
          </div>
          <Button
            color='blue'
            buttonType='filled'
            size='regular'
            rounded={true}
            iconOnly={true}
            ripple='light'
            className='lg:flex hidden'
          >
            <Icon name='search' />
          </Button>
        </div>
        <div className='w-full bg-slate-700 md:place-items-center place-items-start py-2 px-3 rounded-lg '>
          <h2 className='text-xl font-robot-slab underline font-normal text-sky-200'>
            Featured
          </h2>
        </div>
        {/**Featured  items here*/}
        <div
          className='
        lg:h-[510px] 
        h-[420px]
        w-full
        mx-auto 
        flex
        flex-grow 
        items-center 
        space-x-48
        overflow-x-scroll
        scrollbar-hide
        shadow-lg
        bg-blue-50
        rounded-lg
        py-2
        px-8
        '
        ></div>
        <div
          className='secondBannerDiv
        '
        />
        <div className='w-full bg-slate-700 md:place-items-center place-items-start py-2 px-3 rounded-lg'>
          <h2 className='text-xl font-robot-slab underline font-normal text-sky-200'>
            Best selling
          </h2>
        </div>
        {/**Best sellers */}
        <div
          className='
        h-[890px] 
        w-full 
        overflow-x-scroll
        mx-auto
        grid
        place-items-center
        lg:grid-cols-3
        sm:grid-cols-2
        grid-cols-1
        space-y-3
        space-x-3
        overflow-y-scroll
        scrollbar-hide
        bg-blue-50
        rounded-lg
        m-2
        px-4
        py-2
        pb-[240px]
        justify-evenly
        '
        ></div>
      </main>

      <footer
        className='
      bottom-0
      z-50
      sticky
      flex
      items-center
      justify-evenly
      px-5
      py-3
      bg-slate-600
      '
      >
        <a
          href='https://equilast.net/'
          className='
        text-lg 
        text-sky-50
        font-google-sans 
        font-normal
        underline
        hover:animate-pulse
        hover:text-red-300
        transform
        transition
        duration-300
        ease-in-out
        '
        >
          Visit the company website
        </a>
      </footer>
    </div>
  )
}
