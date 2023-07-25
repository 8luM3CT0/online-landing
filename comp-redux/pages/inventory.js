//front-end
import Head from 'next/head'
import React from 'react'
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InvHeader,
  AddForm,
  InvProduct
} from '../components/'
//back-end
import { useState, useRef, useEffect } from 'react'
import { creds, store, storage } from '../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import {
  InstantSearch,
  InfiniteHits,
  connectSearchBox,
  Configure
} from 'react-instantsearch-dom'

const searchClient = instantMeiliSearch(
  'https://ms-165b4ed19152-3740.sfo.meilisearch.io',
  '397ee881e2c43e2a62a6170d0e85c926ebc43744'
)

function Inventory () {
  const [user] = useAuthState(creds)
  const [addModal, setAddModal] = useState(false)
  //for product details

  const SearchBar = ({ currentRefinement, isSearchStalled, refine }) => (
    <form
      noValidate
      action=''
      role='search'
      className='
    w-[80%]
    h-[70px]
    place-self-center
    rounded-lg
    bg-slate-800
    bg-opacity-80
    px-4
    mx-auto
    mt-3
    '
    >
      <input
        type='search'
        placeholder='Search product here...'
        value={currentRefinement}
        onChange={e => refine(e.currentTarget.value)}
        className='
      border-0
      h-full
      w-full
      outline-none
      bg-transparent
      placeholder-slate-100
      text-slate-100
      font-font-robot
      font-normal
      text-lg
      '
      />
    </form>
  )

  const CustomSearchBar = connectSearchBox(SearchBar)

  return (
    <>
      <div
        className='
    bg-gray-50 
    w-screen
    overflow-hidden
    h-screen'
      >
        <Head>
          <title>Here is the inventory, {user?.displayName}</title>
        </Head>
        <InvHeader />
        <main
          className='
        h-screen
        w-screen
        pb-8
        flex
        flex-col
        space-y-4
        overflow-hidden
        bg-slate-200
        py-4
        px-7
        '
        >
          <h1
            className='
        text-red-600 
        text-xl 
        font-robot-condensed 
        font-semibold
        underline
        px-7
        py-4
        place-self-start
        '
          >
            Add product
          </h1>
          <Button
            onClick={e => setAddModal(true)}
            color='blueGray'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='
            font-robot-slab 
            font-normal
            lg:text-xl 
            md:text-lg
            text-base 
            capitalize 
            lg:w-[690px]
            md:w-[490px]
            sm:w-[390px]
            w-[270px]
            mx-auto
            '
          >
            <Icon name='add' />
            Add product
          </Button>
          {/**inventory feed*/}
          <div
            className='
          inventoryMainDiv'
          >
            <InstantSearch indexName='products' searchClient={searchClient}>
              <CustomSearchBar />
              <div
                className='
              w-screen
              px-3
              py-4
              grid
              bg-slate-800
              bg-opacity-80
              place-items-center
              mx-auto
              my-auto
              overflow-y-scroll
              space-y-8
              scrollbar-thin
              scrollbar-track-slate-600
              scrollbar-thumb-slate-100
              h-[95%]
              '
              >
                <InfiniteHits hitComponent={InvProduct} />
              </div>
              <Configure hitsPerPage={5} />
            </InstantSearch>
          </div>
        </main>
      </div>
      {/**add product */}
      <Modal
        size='regular'
        active={addModal}
        toggler={() => setAddModal(false)}
      >
        <ModalHeader toggler={() => setAddModal(false)}>
          <h1
            className='
            text-lg 
            font-robot-slab 
            font-semibold 
            text-sky-500 
            underline 
            px-5 
            animate-pulse
            py-3
            shadow-md
            '
          >
            Add a product
          </h1>
        </ModalHeader>
        <ModalBody>
          <AddForm />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setAddModal(false)}
            block={true}
            buttonType='filled'
            size='regular'
            color='red'
            ripple='light'
            className='text-lg font-robot-slab font-normal capitalize'
          >
            <Icon name='close' />
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Inventory
