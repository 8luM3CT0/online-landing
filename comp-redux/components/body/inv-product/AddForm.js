import React, { useState, useRef, useEffect } from 'react'
import { store, storage, creds } from '../../../backend/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button, Icon } from '../../'

function AddForm () {
  //for product details
  const [user] = useAuthState(creds)
  const filepickerRef = useRef(null)
  const [productName, setProductName] = useState('')
  const [productType, setProductType] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productImg, setProductImg] = useState(null)

  const removeImage = () => {
    setProductImg(null)
  }

  const addImageForProd = e => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setProductImg(readerEvent.target.result)
    }
  }

  //to add product at db
  const addProduct = e => {
    e.preventDefault()

    if (!productName || !productType || !productPrice) {
      return
    }
    if (productImg) {
      store
        .collection('products')
        .add({
          productName: productName,
          productType: productType,
          productPrice: productPrice,
          productAdder: user?.displayName,
          adderPic: user?.photoURL,
          addedOn: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(doc => {
          if (productImg) {
            const uploadTask = storage
              .ref(`products/${doc.id}`)
              .putString(productImg, 'data_url')

            removeImage()

            uploadTask.on(
              'state_change',
              null,
              error => console.error(error),
              () => {
                storage
                  .ref('products')
                  .child(doc.id)
                  .getDownloadURL()
                  .then(image => {
                    store.collection('products').doc(doc.id).set(
                      {
                        productImage: image
                      },
                      { merge: true }
                    )
                  })
              }
            )
          }
        })
    } else {
      store.collection('products').add({
        productName: productName,
        productType: productType,
        productPrice: productPrice,
        productAdder: user?.displayName,
        adderPic: user?.photoURL,
        addedOn: firebase.firestore.FieldValue.serverTimestamp()
      })
    }

    setProductName('')
    setProductType('')
    setProductPrice('')
    setAddModal(false)
  }

  //cancel adding of product
  const cancelAdd = e => {
    e.preventDefault()

    setProductName('')
    setProductType('')
    setProductPrice('')
    setAddModal(false)
  }

  return (
    <>
      <form
        className='
px-8
py-6
grid
place-items-start
bg-slate-300
bg-opacity-70
shadow-lg
space-y-4
lg:w-[540px]
md:w-[450px]
w-[310px]
'
      >
        <h3 className='text-lg font-robot-slab font-normal text-sky-600'>
          Name: {''}
        </h3>
        <input
          value={productName}
          type='text'
          placeholder='Product name...'
          onChange={e => setProductName(e.target.value)}
          className='
    bg-transparent 
    outline-none 
    border-b-2 
    border-sky-400
    font-robot-slab
    font-semibold
    text-lg
    text-slate-800
    shadow-lg
    p-4
    w-full
    '
        />
        <h3 className='text-lg font-robot-slab font-normal text-sky-600'>
          Type: {''}
        </h3>
        <input
          value={productType}
          type='text'
          placeholder='Product type...'
          onChange={e => setProductType(e.target.value)}
          className='
    bg-transparent 
    outline-none 
    border-b-2 
    border-sky-400
    font-robot-slab
    font-semibold
    text-lg
    text-slate-800
    shadow-lg
    p-4
    w-full
    '
        />
        <h3 className='text-lg font-robot-slab font-normal text-sky-600'>
          Price: {''}
        </h3>
        <input
          value={productPrice}
          type='text'
          placeholder='Product price...'
          onChange={e => setProductPrice(e.target.value)}
          className='
    bg-transparent 
    outline-none 
    border-b-2 
    border-sky-400
    font-robot-slab
    font-semibold
    text-lg
    text-slate-800
    shadow-lg
    p-4
    w-full
    '
        />
      </form>
      {productImg ? (
        <div className='hover:opacity-90 grid space-y-2 place-items-center mx-auto'>
          <img
            src={productImg}
            alt=''
            className='
      my-4
      rounded-lg 
      lg:h-24 
      lg:w-[104px]
      h-16
      w-[72px]
      border 
      border-blue-200'
          />
          <Button
            onClick={e => setProductImg(null)}
            color='red'
            buttonType='filled'
            size='regular'
            ripple='light'
            className='font-robot-slab font-semibold text-lg capitalize'
          >
            Remove ?
          </Button>
        </div>
      ) : (
        <div className='m-2 shadow-lg p-3 mx-auto rounded-lg bg-slate-300 bg-opacity-70'>
          <Button
            onClick={() => filepickerRef.current.click()}
            color='blueGray'
            buttonType='filled'
            ripple='light'
            className='font-robot-slab font-semibold text-lg capitalize mx-auto'
          >
            <Icon name='add' />
            Add image
          </Button>
          <input
            type='file'
            hidden
            ref={filepickerRef}
            onChange={addImageForProd}
          />
        </div>
      )}
      <Button
        onClick={addProduct}
        block={true}
        buttonType='filled'
        size='regular'
        color='blueGray'
        ripple='light'
        className='text-lg font-robot-slab font-normal capitalize px-3 py-2'
      >
        <Icon name='add_shopping_cart' />
        Add
      </Button>
    </>
  )
}

export default AddForm
