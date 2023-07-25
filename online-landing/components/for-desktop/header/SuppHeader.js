//front-end
import React, { useState } from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from '../../'
import {FiUserPlus} from 'react-icons/fi'
import {FaConnectdevelop} from 'react-icons/fa'
import {SiBmcsoftware, AiOutlineHome} from '../../'
//back-end
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store, provider } from '../../../backend/firebase'
import firebase from 'firebase'


function SuppHeader() {
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
    desktopIndexHeader
    '
    >
        <FaConnectdevelop 
    style={{
        fontSize: '2.0em',
        color: 'goldenrod'
    }}
    />
        
        <span 
        onClick={() => router.push('/')}
        
        className="
        grid
        place-items-center
        space-y-2
        cursor-pointer
        hover:shadow-lg
        transform
        trasition
        duration-300
        ease-in-out
        ">
            <AiOutlineHome 
        style={{
            fontSize:'1.5em',
            color: 'greenyellow',
            cursor: 'pointer'
        }}
        />
        <h4 className="
        font-path-ex
        font-normal
        text-base
        text-slate-100
        ">
            Home
        </h4>
        </span>
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
                        className='
                        h-[1.5rem]
                        w-[1.5rem]
                        rounded-3xl
                        '
                        />
                    <h1 className="
                    font-montserr
                    font-normal
                    text-base
                    text-slate-50
                    ">
                        {user?.displayName}
                    </h1>
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
            <h1 className="
            font-montserr
            font-normal
            text-base
            text-slate-50
            ">
                User
            </h1>
            </span>
        )}
    </div>
    </>
  )
}

export default SuppHeader