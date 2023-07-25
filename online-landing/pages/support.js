//front-end
import Head from 'next/head'
import {MobSuppHeader, DeskSuppHeader, SupportRoutes, Modal, ModalHeader, ModalBody} from '../components/'
//back-end
import React, { useState } from 'react'
import { creds, store } from '../backend/firebase'
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'

function Support({data}) {

const [title, setTitle] = useState('')
const [supportQuery, setSupportQuery] = useState('')
const [errorModal, setErrorModal] = useState(false)

const addQueryToDb = e => {
  e.preventDefault()

  if(!title) return (
    <Modal
    size='regular'
    active={errorModal}
    toggler={() => setErrorModal(false)}
    >
      <ModalHeader toggler={() => setErrorModal(false)}>
        <h1 className="text-xl font-fira-sans pl-4 pr-8"></h1>
      </ModalHeader>
      <ModalBody>
        <h1 className="
        px-9 
        py-10 
        font-montserr 
        text-xl
        text-slate-600 
        w-[130px]">
          Error: there is something wrong with your input
        </h1>
      </ModalBody>
    </Modal>
  )

  {title && supportQuery ? (
    store
    .collection('support_table')
    .add({
      title,
      supportQuery
    })
  ): (
    store
    .collection('support_table')
    .add({
      title
    })
  )}

  setTitle('')
  {supportQuery ? setSupportQuery('') : ''}
}

  return (
    <div className='
    bg-gradient-to-bl
    animationTest
    h-screen
    bg-placholder
    bg-no-repeat
    bg-cover
    overflow-hidden
    '>
        <MobSuppHeader />
        <DeskSuppHeader />
        <SupportRoutes />
        <Head>
            <title>Support page</title>
        </Head>
        <main className="
        lg:w-[70%]
        md:w-[75%]
        w-[80%]
        bg-slate-300
        bg-opacity-30
        mx-auto
        grid
        place-items-center
        h-screen
        overflow-y-scroll
        scrollbar-hide
        ">
          <div
          className="
          h-[70%]
          w-[90%]
          flex
          flex-col
          space-y-5
          place-items-center
          m-auto
          bg-gradient-to-br
          from-[#273248]
          to-[#af4f41]
          rounded-xl
          ">
            <input 
            type="text" 
            placeholder='What seems to be the issue ?'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="
            my-6
            w-[70%]
            h-[65px]
            mx-auto
            border-0
            outline-none
            bg-slate-600
            text-slate-50
            font-fira-sans
            px-3
            font-light
            text-xl
            rounded-xl
            " />
            <textarea 
            type='text'
            placeholder='Description of the issue...(Optional)'
            value={supportQuery}
            onChange={e => setSupportQuery(e.target.value)}
            className="
            h-[70%]
            w-[80%]
            mx-auto
            border-2
            border-[#e9c46a]
            bg-gradient-to-bl
            from-[#103c49]
            to-[#3e1d15]
            rounded-xl
            font-montserr
            font-normal
            text-lg
            text-amber-100
            px-7
            py-4
            "></textarea>
            <button
            onClick={addQueryToDb} 
            className="
            w-[40%]
            h-[50px]
            mx-auto
            rounded-xl
            bg-gradient-to-br
            from-[#cb7876]
            to-[#32769b]
            px-3
            py-2
            hover:shadow-xl
            hover:shadow-slate-600
            text-slate-700
            transform
            transition
            duration-300
            font-path-ex
            font-semibold
            ease-in-out
            ">

                Send query
            </button>
          </div>
        </main>
    </div>
  )
}

export default Support

/*export async function getServerSideProps(){
 
}
*/