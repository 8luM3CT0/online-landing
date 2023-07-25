//front-end
import React, { useState } from 'react'
import {Modal, ModalHeader, ModalFooter, ModalBody} from '../'
import {FaConnectdevelop} from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUserPlus } from 'react-icons/fi'

//back-end
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../../backend/firebase'
import { useEffect } from 'react'
import firebase from 'firebase'


function MobileIndHeader() {
  const router = useRouter()
  const [user] = useAuthState(creds)

  const signIn = e => {
    e.preventDefault()
    creds.signInWithPopup(provider).catch(alert)
  }

  useEffect(() => {
    if(user && (
        user?.displayName == 'Reaper IFF' ||
        user?.displayName == 'Gabe Cloa' || 
        user?.displayName == 'John Seed' ||
        user?.displayName == 'Robert Seed'
        )){
        store.collection('support_main').add({
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            createdOn: firebase.firestore.FieldValue.serverTimestamp(),
            primaryUser: true
        })
    } else if(user && (
        user?.displayName !== 'Reaper IFF' ||
        user?.displayName !== 'Gabe Cloa' || 
        user?.displayName !== 'John Seed' ||
        user?.displayName !== 'Robert Seed'
    )){
        store.collection('support_users').add({
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            email: user?.email,
            createdOn: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
  }, [user])




  return (
    <>
    <div
    className='
    mobIndexHeader
    '
    >
<FaConnectdevelop 
style={{
    fontSize: '2.0em',
    color: 'goldenrod',
    cursor: 'pointer'
}}
/>
<AiOutlineHome
onClick={() => router.push('/')} 
        style={{
            fontSize:'1.5em',
            color: 'greenyellow',
            cursor: 'pointer'
        }} />
                
    {user ? (
        <span 
        onClick={() => creds.signOut()}  
className="
flex
items-center
space-x-3
px-3
cursor-pointer
bg-slate-700
hover:bg-indigo-800
rounded-xl
transform
transition
duration-200
ease-in-out
py-2
">
<img 
src={user?.photoURL} 
alt="" 
className="
h-[1.5rem]
w-[1.5rem]
rounded-3xl
" />
</span>
    ): (
        <span 
                onClick={signIn}  
        className="
        flex
        items-center
        space-x-3
        px-3
        cursor-pointer
        bg-slate-700
        hover:bg-indigo-800
        rounded-xl
        transform
        transition
        duration-200
        ease-in-out
        py-2
        ">
        <FiUserPlus
        style={{
            fontSize: '1.1em',
            color: 'cyan'
        }}
        />
        </span>
    )}
    </div>
    </>
  )
}

export default MobileIndHeader