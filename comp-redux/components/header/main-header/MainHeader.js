//front-end
import React from 'react'
import { Button, Icon, Modal, ModalHeader, ModalFooter, ModalBody } from '../..'
//back-end
import { useEffect, useState } from 'react'
import { creds, store, provider } from '../../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function MainHeader () {
  const [user] = useAuthState(creds)
  const [logoutWind, setLogoutWind] = useState(false)
  const [menuWind, setMenuWind] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
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

  //open sing in modal
  const openSignOut = e => {
    e.preventDefault()

    setMenuWind(false)
    setLogoutWind(true)
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
    bg-zinc-50
    border-b-2
    border-slate-700
    '
      >
        <div className='
        lg:flex 
        items-center 
        space-x-3 
        hidden'>
          <button
          className='
          bg-transparent
          text-2xl
          font-mont-sub
          font-semibold
          uppercase
          px-3
          py-2
          rounded-b-lg
          hover:shadow-lg
          transform
          transition
          duration-300
          ease-in-out
          flex
          items-center
          space-x-1
          '
          >
            <h1
            className='text-red-600
            text-3xl
            '
            >
              E
            </h1>
            <h1
            className='
            font-montserr
            text-slate-600'
            >
              quiLast
            </h1>
            <h1
            className='
            text-slate-800
            text-sm
            font-normal
            font-path-ex
            lowercase
            '
            >
            inc.
            </h1>
          </button>
        </div>
        <div className='flex items-center space-x-3 lg:hidden'>
          <Button
            onClick={e => setMenuWind(true)}
            color='blueGray'
            buttonType='link'
            size='regular'
            rounded={false}
            block={false}
            ripple='light'
          >
            <Icon name='menu' />
          </Button>
        </div>
        <div className='flex items-center space-x-3 lg:hidden'>
          <Button
            color='blueGray'
            buttonType='link'
            size='regular'
            rounded={false}
            block={false}
            ripple='light'
          >
            <img
              src='https://equilast.net/wp-content/uploads/2020/08/cropped-EI-Logo-3.png'
              className='lg:h-[60px] lg:w-[320px] md:h-[50px] md:w-[290px] h-[40px] w-[260px]'
            />
          </Button>
        </div>
        <div className='flex items-center space-x-3 px-3 py-2'>
          <Button
            color='blueGray'
            buttonType='link'
            size='regular'
            ripple='light'
            className='
            flex
            py-3
            relative
            items-center
            space-x-2
            capitalize
            '
          >
            <span
              className='
          absolute 
          top-0 
          right-10
          h-4
          w-4
          mr-2
          bg-rose-600
          text-center
          rounded-3xl
          text-gray-50
          font-normal
          '
            >
              <p className='text-sm'>0</p>
            </span>
            <Icon name='shopping_cart' />
          </Button>
          {!user ? (
            <Button
              onClick={signIn}
              color='blueGray'
              buttonType='link'
              size='regular'
              ripple='light'
              className='hidden lg:flex lg:flex-col place-items-center space-y-2 text-base font-normal font-robot-condensed capitalize'
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
              className='hidden lg:flex lf:flex-col place-items-center space-y-2 text-base font-normal font-robot-condensed capitalize'
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
      {/**mobile menu modal*/}
      <Modal
        size='regular'
        active={menuWind}
        toggler={() => setMenuWind(false)}
      >
        <ModalHeader toggler={() => setMenuWind(false)}>
          <h1
            className='
        font-google-sans 
        font-semibold 
        text-lg 
        text-red-500 
        underline'
          >
            Menu options
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
        grid 
        px-16
        py-14
        place-items-center 
        space-y-4'
          >
            {user ? (
              <div
                className='
              grid
              place-items-center
              space-y-3
              p-4
              '
              >
                <img
                  src={user?.photoURL}
                  alt=''
                  className='
          h-12
          w-12
          rounded-3xl
          border
          border-sky-50
          '
                />
                <p className='text-lg capitalize font-robot-slab font-normal'>
                  {user?.displayName}
                </p>
                <Button
                  onClick={e => creds.signOut()}
                  color='red'
                  buttonType='filled'
                  rounded={false}
                  ripple='light'
                  className='capitalize font-robot-slab font-normal space-x-2'
                >
                  <Icon name='logout' />
                  Log out
                </Button>
              </div>
            ) : (
              <Button
                onClick={signIn}
                size='regular'
                buttonType='link'
                color='blueGray'
                rounded={false}
                className='
        grid 
        place-items-center 
        space-y-2 
        font-robot-condensed
        font-normal
        capitalize
        '
              >
                <Icon name='account_circle' />
                <p className='text-lg'>Sign in</p>
              </Button>
            )}
            <Button
              size='regular'
              buttonType='link'
              color='blueGray'
              rounded={false}
              ripple='light'
              className='
          flex 
          font-robot-condensed 
          font-normal 
          items-center
          capitalize
          text-lg
          '
            >
              <Icon name='shopping_basket' />
              Orders
            </Button>
            {(user?.displayName === 'John Seed' ||
              user?.displayName === 'Reaper IFF') && (
              <Button
                onClick={() => router.push('/inventory')}
                size='regular'
                buttonType='link'
                color='blueGray'
                rounded={false}
                ripple='light'
                className='
          flex 
          font-robot-condensed 
          font-normal 
          items-center
          capitalize
          text-lg
          '
              >
                <Icon name='inventory' />
                Inventory
              </Button>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setMenuWind(false)}
            color='red'
            buttonType='link'
            size='regular'
            className='
            font-robot-condensed 
            font-normal 
            space-x-2
            text-lg 
            capitalize'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
      {/**user login modal */}
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
            <Button
              onClick={e => router.push('/inventory')}
              color='blue'
              buttonType='filled'
              size='regular'
              block={true}
              ripple='light'
              className='text-lg font-robot-condensed font-normal capitalize'
            >
              <Icon name='inventory' />
              Inventory
            </Button>
            <Button
              onClick={logOut}
              color='blueGray'
              buttonType='filled'
              size='regular'
              block={true}
              ripple='light'
              className='text-lg font-robot-condensed font-normal capitalize'
            >
              <Icon name='logout' />
              Sign out
            </Button>
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
    </>
  )
}

export default MainHeader
