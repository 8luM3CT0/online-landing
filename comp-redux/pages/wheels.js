//front-end
import React from 'react'
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  PageHeader
} from '../components/'
//back-end
import { creds, store, storage } from '../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useState, useEffect, useRed } from 'react'

function Wheels () {
  const [user] = useAuthState(creds)
  //for searching
  const [search, setSearch] = useState('')
  //battery snapshot
  const [batterySnap] = useCollection(
    store
      .collection('battery')
      .where('productName', '>=', search)
      .where('productName', '<=', search + '\uf8ff')
  )

  return (
    <>
      <div
        className='
      bg-slate-50 
      overflow-y-scroll 
      scrollbar-hide'
      >
        <PageHeader pageTitle='directions_car_filled' iconName='Tires' />
        <main
          className='
        h-screen
      max-w-7xl
      mx-auto
      space-y-2
      bg-gray-300
      overflow-y-scroll
      scrollbar-thin
      scrollbar-track-red-200
      scrollbar-thumb-red-500
      grid
        '
        ></main>
      </div>
    </>
  )
}

export default Wheels
