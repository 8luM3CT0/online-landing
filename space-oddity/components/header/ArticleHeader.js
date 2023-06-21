//front-end
import React from 'react'
import { Button, Icon } from '../'
//back-end
import { useState } from 'react'
import { useRouter } from 'next/router'
import { creds, store, storage } from '../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function ArticleHeader () {
  const [user] = useAuthState(creds)
  const router = useRouter()

  return (
    <>
      <header
        className='
        top-0
        z-50
        sticky
        w-full
        grid
        '
      >
        {/**
        login credentials && blog link
         */}
        <div
          className='
            flex
            items-center
            justify-between
            px-4
            py-3
            w-full
            bg-slate-700
            bg-opacity-70
            '
        >
          <Button
            onClick={() => router.push('/blog')}
            buttonType='filled'
            size='regular'
            color='blueGray'
            ripple='light'
            className='font-normal capitalize text-lg font-robot-condensed'
          >
            <Icon name='web' />
            Blog
          </Button>
          <Button
            buttonType='link'
            size='regular'
            color='blue'
            ripple='light'
            className='font-normal capitalize'
          >
            <Icon name='person_4' />
          </Button>
        </div>
        {/**links to other components */}
        <div
          className='
            flex
            items-center
            justify-evenly
            px-5
            py-4
            w-full
            bg-sky-800
            bg-opacity-70
            '
        >
          <Button
            onClick={() => router.push('/')}
            color='lightBlue'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='gite' />
          </Button>
          <Button
            onClick={() => router.push('/solar')}
            color='green'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='public' />
          </Button>
          <Button
            onClick={() => router.push('/external')}
            color='red'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='auto_awesome' />
          </Button>
          <Button
            onClick={() => router.push('/rocket')}
            color='orange'
            size='sm'
            buttonType='link'
            rounded={true}
            ripple='dark'
          >
            <Icon name='rocket' />
          </Button>
        </div>
      </header>
    </>
  )
}

export default ArticleHeader
