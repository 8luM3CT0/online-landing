//front-end
import React from 'react'
import { Button, Icon, Modal, ModalHeader, ModalFooter, ModalBody } from '../..'
//back-end
import { useEffect, useState } from 'react'
import { creds, store, provider } from '../../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function InvHeader () {
  const [user] = useAuthState(creds)
  const [logoutWind, setLogoutWind] = useState(false)
  const router = useRouter()

  const signIn = () => {
    creds.signInWithPopup(provider).catch(alert)
  }
  useEffect(() => {
    if (user) {
      store.collection('users').doc(user?.uid).set({
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL
      })
    }
  }, [user])
  const logOut = e => {
    e.preventDefault()
    creds.signOut()
    setLogoutWind(false)
  }

  return (
    <>
      <header
        className='
    top-0 
    z-50 
    sticky 
    flex
    items-center
    justify-evenly 
    px-7 
    py-4
    bg-slate-800
    border-b-4
    shadow-lg
    border-sky-400
    '
      >
        <div className='flex items-center space-x-3 '>
          <Button
            onClick={e => router.push('/')}
            color='blueGray'
            buttonType='link'
            size='regular'
            rounded={false}
            block={false}
            ripple='light'
          >
            <Icon name='arrow_back_ios' />
          </Button>
        </div>
        <h1
          className='
      px-3
      text-lg
      font-robot-slab
      font-semibold
      text-gray-100
      '
        >
          Inventory
        </h1>
        <div className='flex items-center space-x-3 px-3 py-2'>
          {!user ? (
            <Button
              onClick={signIn}
              color='blueGray'
              buttonType='link'
              size='regular'
              ripple='light'
              className='grid place-items-center space-y-2 text-base font-normal font-robot-condensed capitalize'
            >
              <Icon name='people' />
              <p className='mobileDisplay'>Sign in</p>
            </Button>
          ) : (
            <Button
              onClick={e => setLogoutWind(true)}
              color='lightBlue'
              buttonType='link'
              rounded={false}
              size='regular'
              ripple='light'
              className='grid place-items-center space-y-2 text-base font-normal font-robot-condensed capitalize'
            >
              <img
                src={user?.photoURL}
                className='
        h-12 
        w-12 
        rounded-3xl 
        border 
        border-sky-300'
              />
            </Button>
          )}
        </div>
      </header>
      {
        <Modal
          size='regular'
          active={logoutWind}
          toggler={() => setLogoutWind(false)}
        >
          <ModalHeader toggler={() => setLogoutWind(false)}>
            <p
              className='
        font-semibold 
        font-robot-slab 
        text-xl 
        text-sky-400 
        underline'
            >
              User credentials
            </p>
          </ModalHeader>
          <ModalBody>
            <div
              className='
        px-7
        py-12
        grid
        place-items-center
        space-y-4
        rounded-lg
        '
            >
              <img
                src={user?.photoURL}
                className='
          h-14
          w-14
          rounded-3xl
          border
          border-red-400
          '
              />
              <h3
                className='
          text-xl 
          font-robot-slab 
          font-semibold 
          text-red-600'
              >
                {user?.displayName}
              </h3>
              <p className='text-lg font-google-sas font-normal text-red-400'>
                {user?.email}
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={e => setLogoutWind(false)}
              color='red'
              buttonType='link'
              size='regular'
              ripple='dark'
              className='font-robot-condensed font-normal text-lg capitalize'
            >
              <Icon name='cancel' />
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      }
    </>
  )
}

export default InvHeader
