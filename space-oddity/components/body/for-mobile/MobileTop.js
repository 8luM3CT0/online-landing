import React from 'react'
//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useState } from 'react'

function MobileTop ({ id, title, description, author, date, imgUrl, url }) {
  const [news, setNews] = useState(false)

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
        key={id}
        className='
mobileTop
    '
      >
        <h1
          className='
        font-ibm-sans 
        font-semibold 
        text-2xl
        mx-auto
        text-sky-100
        underline
        '
        >
          {title}
        </h1>
        <h3
          className='
        font-ibm-sans 
        font-semibold 
        text-xl
        mx-auto
        text-sky-200
        underline
        '
        >
          From: {author}
        </h3>
        <Button
          onClick={e => setNews(true)}
          color='orange'
          buttonType='filled'
          block={true}
          ripple='light'
          className='font-robot-slab font-semibold capitalize'
        >
          <Icon name='info' />
          Read more
        </Button>
      </div>
      <Modal size='regular' active={news} toggler={() => setNews(false)}>
        <ModalHeader toggler={() => setNews(false)}>
          <h1
            className='
      pl-4 
      pr-8 
      text-base 
      font-ibm-sans 
      font-semibold 
      text-amber-600
      '
          >
            News from {author}
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
      spaceNMDiv
      '
          >
            {/**img url */}
            <div
              style={{
                backgroundImage: `url(${imgUrl})`
              }}
              className='
            h-[240px]
            w-full
            mx-auto
            rounded-lg
            '
            ></div>
            {/**Title and  description */}
            <h1
              className='
            place-self-start
            text-lg
            font-ibm-sans 
            font-semibold 
            text-amber-100
            underline
            '
            >
              {title}
            </h1>
            <div
              className='
              min-h-[90px]
            max-h-[150px]
            w-full
            bg-slate-800
            bg-opacity-100
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-amber-800
            scrollbar-thumb-slate-800
            text-sky-100
            text-lg
            font-robot-slab font-normal
            '
            >
              {description}
            </div>
            <a
              href={url}
              className='
                w-[120px]
              mx-auto
              truncate
              overflow-ellipsis
              text-sm 
              font-ibm-sans 
              font-semibold 
              text-sky-300
              hover:underline
              hover:shadow-md
              hover:shadow-sky-200
              rounded-lg
              transform
              transition
              duration-300
              ease-out
              '
            >
              {url}
            </a>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setNews(false)}
            size='regular'
            color='red'
            block={true}
            ripple='light'
            className='
      font-robot-slab
      font-normal
      text-base
      capitalize
      space-x-2
      '
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MobileTop
