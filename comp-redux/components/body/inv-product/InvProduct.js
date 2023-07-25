//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  Input
} from '../../'
//back-end
import { useState, useRef, useEffect } from 'react'
import { creds, storage, store } from '../../../backend/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

function InvProduct ({ hit }) {
  const [user] = useAuthState(creds)
  const [itemOptions, setItemOptions] = useState(false)
  const [deleteProd, setDeleteProd] = useState(false)
  const [addToCat, setAddToCat] = useState(false)
  const [updateProd, setUpdateProd] = useState(false)
  //update product
  const [updateModal, setUpdateModal] = useState(false)
  const filePickerRef = useRef(null)
  const [updatedName, setUpdatedName] = useState('')
  const [updatedType, setUpdatedType] = useState('')
  const [updatedPrice, setUpdatedPrice] = useState('')
  const [updatedImage, setUpdatedImage] = useState(null)

  //for opening the add to category type
  const openAddToCat = e => {
    e.preventDefault()
    setItemOptions(false)
    setAddToCat(true)
  }

  const cancelAddToCat = e => {
    e.preventDefault()
    setAddToCat(false)
    setItemOptions(true)
  }

  //for opening the delete modal
  const openDeleteProd = e => {
    e.preventDefault()
    setItemOptions(false)
    setDeleteProd(true)
  }

  const cancelDelete = e => {
    e.preventDefault()
    setDeleteProd(false)
    setItemOptions(true)
  }

  //for opening the update modal
  const openUpdateProd = e => {
    e.preventDefault()
    setItemOptions(false)
    setUpdateProd(true)
  }

  const cancelUpdateProd = e => {
    e.preventDefault()
    setUpdateProd(false)
    setItemOptions(true)
  }
  //for deleting
  const deleteProduct = e => {
    e.preventDefault()

    store.collection('products').doc(id).delete()

    setDeleteProd(false)
  }

  //adds the product to the featured area at main page
  const addToFeatured = e => {
    e.preventDefault()

    store.collection('featured').add({
      productImage: productImg,
      productName: productName,
      productType: productType,
      productPrice: productPrice,
      productAdder: productAdder,
      addedOn: firebase.firestore.FieldValue.serverTimestamp()
    })
    setItemOptions(false)
  }

  //for adding to correct category
  const addToCorrectCat = e => {
    e.preventDefault()

    if (productType === 'battery' || productType === 'Battery') {
      store.collection('battery').add({
        productName: productName,
        productPrice: productPrice,
        productType: productType,
        prodAdder: productAdder,
        productImg: productImg
      })
    } else if (
      productType === 'ups' ||
      productType === 'Ups' ||
      productType === 'UPS'
    ) {
      store.collection('ups').add({
        productName: productName,
        productPrice: productPrice,
        productType: productType,
        prodAdder: productAdder,
        productImg: productImg
      })
    } else if (
      productType === 'wheels' ||
      productType === 'Wheels' ||
      productType === 'tire' ||
      productType === 'Tire' ||
      productType === 'tires' ||
      productType === 'Tires'
    ) {
      store.collection('wheels').add({
        productName: productName,
        productPrice: productPrice,
        productType: productType,
        prodAdder: productAdder,
        productImg: productImg
      })
    }
    setItemOptions(false)
  }

  //for update of the product info
  const updateProductName = e => {
    e.preventDefault()

    if (updatedName !== '') {
      store.doc(`/products/${hit?._firestore_id}`).set(
        {
          productName: updatedName,
          productAdder: user?.displayName,
          adderPic: user?.photoURL
        },
        {
          merge: true
        }
      )
    }
    setUpdatedName('')
  }

  const updateProductType = e => {
    e.preventDefault()

    if (updatedType !== '') {
      store.doc(`/products/${hit?._firestore_id}`).set(
        {
          productType: updatedType,
          productAdder: user?.displayName,
          adderPic: user?.photoURL
        },
        {
          merge: true
        }
      )
    }
    setUpdatedType('')
  }

  const updateProductPrice = e => {
    e.preventDefault()

    if (updatedPrice !== '') {
      store.doc(`/products/${hit?._firestore_id}`).set(
        {
          productPrice: updatedPrice,
          productAdder: user?.displayName,
          adderPic: user?.photoURL
        },
        {
          merge: true
        }
      )
    }
    setUpdatedPrice('')
  }

  //for product image
  const handleChange = e => {
    const reader = new FileReader()
    if (e.target.value[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setUpdatedImage(readerEvent.target.result)
    }
  }

  const removePic = () => {
    setUpdatedImage(null)
  }

  const setProdPic = async e => {
    e.preventDefault()

    if (!updatedImage) {
      alert('Add a picture for the product')
    }

    if (updatedImage) {
      const uploadTask = storage
        .ref(`products/${hit?._firestore_id}`)
        .putString(updatedImage, 'data_url')

      removePic()

      uploadTask.on(
        'state_change',
        error => console.error(error),
        () => {
          storage
            .ref('products')
            .child(id)
            .getDownloadURL()
            .then(doc => {
              store.doc(`/products/${hit?._firestore_id}`).set(
                {
                  productImg: updatedImage
                },
                {
                  merge: true
                }
              )
            })
        }
      )
    }
  }

  return (
    <>
      <div
        key={hit?._firestore_id}
        className='    
        bg-slate-400
        h-[290px] 
        w-[90%]
        px-8
        py-10
        space-x-2
        m-4
        rounded-lg 
        flex
        items-center
        cursor-pointer
        hover:opacity-95
        hover:scale-105
        hover:shadow-xl
    hover:shadow-slate-800
        transform
        transition
        duration-300
        ease-in-out
        group
    '
      >
        {hit?.productImg ? (
          <img
            src={hit?.productImg}
            alt=''
            className='
          h-[210px]
          w-full
          place-self-center
     rounded-lg
     border
     border-red-100
     shadow-lg
     '
          />
        ) : (
          <img
            src='https://i.pinimg.com/originals/2f/9f/7e/2f9f7e134e1be4d0ffd0706cbf1d2ac5.png'
            alt=''
            className='
            h-[150px]
     w-[210px]
     place-self-center
     rounded-lg
     border
     border-red-100
     shadow-lg
     '
          />
        )}
        <div
          className='
      w-full
      justify-between
      px-2
      flex
      items-center
      '
        >
          <h1
            className='
    text-xl 
    uppercase
    font-ibm-sans 
    font-light
    text-slate-100 
    underline'
          >
            {hit?.productName}
          </h1>
          <p className='text-lg font-bold text-slate-100 font-google-sans'>
            {hit?.productPrice}
          </p>
        </div>
        <div
          className='
    mx-auto
    flex
    items-center
    px-3
    space-x-4
    '
        >
          <Button
            onClick={e => setItemOptions(true)}
            buttonType='filled'
            size='regular'
            color='red'
            rounded={false}
            ripple='light'
            className='capitalize font-robot-slab text-base'
          >
            <Icon name='category' />
            Item options
          </Button>
        </div>
      </div>
      {/**
      *
      Modal for item options
      *
       */}
      <Modal
        size='regular'
        active={itemOptions}
        toggler={() => setItemOptions(false)}
      >
        <ModalHeader toggler={() => setItemOptions(false)}>
          <h1 className='text-xl font-robot-condensed font-semibold text-sky-600 underline'>
            Options for the items
          </h1>
        </ModalHeader>
        <ModalBody>
          <div className='grid place-items-start space-y-3 rounded-lg shadow-md p-7 py-6'>
            <p className='text-lg font-rbot-slab font-normal text-slate-600'>
              Edit the product via the button below:
            </p>
            <Button
              onClick={openUpdateProd}
              color='green'
              block={true}
              buttonType='filled'
              size='regular'
              ripple='light'
              className='mx-auto font-robot-slab font-normal capitalize text-lg'
            >
              <Icon name='edit' />
              Update
            </Button>
            <p className=' text-lg font-robot-slab font-normal text-slate-600'>
              Add the product to the correct type below:
            </p>
            <Button
              onClick={addToCorrectCat}
              block={true}
              color='blueGray'
              buttonType='filled'
              size='regular'
              ripple='light'
              className='mx-auto font-robot-slab font-normal capitalize text-lg'
            >
              <Icon name='add' />
              Add to {hit?.productType}
            </Button>
            <p className=' text-lg font-robot-slab font-normal text-slate-600'>
              Feature the product on the main page:
            </p>
            <Button
              onClick={addToFeatured}
              color='blue'
              block={true}
              buttonType='filled'
              size='regular'
              ripple='light'
              className='mx-auto font-robot-slab font-normal capitalize text-lg'
            >
              <Icon name='attach_file' />
              Feature
            </Button>
            <p className='text-lg font-robot-slab font-normal text-slate-600'>
              Delete the product from the database:
            </p>
            <Button
              onClick={deleteProduct}
              color='red'
              buttonType='filled'
              block={true}
              size='regular'
              ripple='light'
              className='mx-auto font-robot-slab font-normal capitalize text-lg'
            >
              <Icon name='delete' />
              Delete
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setItemOptions(false)}
            color='red'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='font-robot-slab font-normal capitalize space-x-2'
          >
            <Icon name='cancel' />
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        size='regular'
        active={deleteProd}
        toggler={() => setDeleteProd(false)}
      >
        <ModalHeader toggler={() => setDeleteProd(false)}>
          <h1 className='font-robot-slab font-semibold text-lg text-sky-600 underline px-5'>
            Delete the item
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          px-7
          py-4
          grid
          place-items-start
          rounded-md
          shadow-md
          '
          >
            <p className='text-base text-sky-700 font-robot-slab font-normal'>
              Delete the product from the product database
            </p>
            <div className='mx-auto flex items-center space-x-2'>
              <Button
                onClick={cancelDelete}
                buttonType='filled'
                color='blueGray'
                size='regular'
                ripple='dark'
                className='font-robot-condensed font-normal text-lg'
              >
                Cancel
              </Button>
              <Button
                onClick={deleteProduct}
                buttonType='filled'
                color='red'
                size='regular'
                ripple='light'
                className='font-robot-condensed font-normal text-lg'
              >
                Delete
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/**
      *
      Modal for item update
      *
       */}
      <Modal size='regular' active={updateProd} toggler={cancelUpdateProd}>
        <ModalHeader toggler={cancelUpdateProd}>
          <h1 className='font-robot-slab font-semibold text-lg text-red-600 underline px-3'>
            Select which to update
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          grid 
          lg:w-[650px]
          md:w-[480px]
          w-[310px]
          place-items-start 
          px-12 
          py-10 
          space-y-3 
          h-[590px] 
          overflow-y-scroll 
          scrollbar-thin
          scrollbar-track-slate-900 
          scrollbar-thumb-sky-500'
          >
            <span className='w-full mx-auto flex items-center space-x-2 font-robot-slab'>
              <h4 className='font-normal text-lg text-sky-600 italic'>Name:</h4>
              <h2 className='font-semibold text-xl text-sky-400'>
                {hit?.productName}
              </h2>
            </span>
            <Input
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Name ?...'
              type='text'
              value={updatedName}
              onChange={e => setUpdatedName(e.targe.value)}
              className='mx-auto'
            />
            <Button
              onClick={updateProductName}
              color='blue'
              buttonType='filled'
              block={true}
              size='regular'
              ripple='light'
              className='text-lg font-robot-slab font-normal space-x-2 capitalize'
            >
              <Icon name='upgrade' />
              Update
            </Button>
            <span className='w-full mx-auto flex items-center space-x-2 font-robot-slab'>
              <h4 className='font-normal text-lg text-sky-600 italic'>Type:</h4>
              <h2 className='font-semibold text-xl text-sky-400'>
                {hit?.productType}
              </h2>
            </span>
            <Input
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Type ?...'
              type='text'
              value={updatedType}
              onChange={e => setUpdatedType(e.target.value)}
              className='mx-auto'
            />
            <Button
              onClick={updateProductType}
              color='blue'
              buttonType='filled'
              block={true}
              size='regular'
              ripple='light'
              className='text-lg font-robot-slab font-normal space-x-2 capitalize'
            >
              <Icon name='upgrade' />
              Update
            </Button>
            <span className='w-full mx-auto flex items-center space-x-2 font-robot-slab'>
              <h4 className='font-normal text-lg text-sky-600 italic'>
                Price:
              </h4>
              <h2 className='font-semibold text-xl text-sky-400'>
                {hit?.productPrice}
              </h2>
            </span>
            <Input
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Price ?...'
              type='text'
              value={updatedPrice}
              onChange={e => setUpdatedPrice(e.target.value)}
              className='mx-auto'
            />
            <Button
              onClick={updateProductPrice}
              color='blue'
              buttonType='filled'
              block={true}
              size='regular'
              ripple='light'
              className='text-lg font-robot-slab font-normal space-x-2 capitalize'
            >
              <Icon name='upgrade' />
              Update
            </Button>
            {hit?.productImg ? (
              <>
                <img
                  src={hit?.productImg}
                  alt=''
                  className='rounded-lg border border-sky-400'
                />
                <Button
                  color='blue'
                  buttonType='filled'
                  block={true}
                  size='regular'
                  ripple='light'
                  className='text-lg font-robot-slab font-normal space-x-2 capitalize'
                >
                  <Icon name='upgrade' />
                  Update
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => filePickerRef.current.click()}
                  color='blue'
                  buttonType='filled'
                  block={true}
                  size='regular'
                  ripple='light'
                  className='text-lg font-robot-slab font-normal space-x-2 capitalize'
                >
                  <Icon name='add' />
                  Add
                </Button>
                <input
                  type='file'
                  hidden
                  ref={filePickerRef}
                  onChange={handleChange}
                />
              </>
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={cancelUpdateProd}
            color='red'
            buttonType='link'
            size='regular'
            ripple='light'
            className='font-robot-slab font-normal text-lg capitalize'
          >
            <Icon name='close' />
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default InvProduct
