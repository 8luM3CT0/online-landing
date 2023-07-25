//front-end
import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from '../../../'
//back-end
import { useState } from 'react'


function ShortCard({id, title, description, duration}) {  
    const [courseInfo, setCourseInfo] = useState(false)
   
    return (
      <>
    <div 
    onClick={() => setCourseInfo(true)}
    key={id}
    className='
    h-[70%]
    max-w-[310px]
    min-w-[310px]
    rounded-xl
    bg-gradient-to-b
    from-indigo-500
    to-teal-800
    cursor-pointer
    hover:shadow-lg
    hover:shadow-slate-800
    transform
    transition
    duration-200
    group
    '><div className="
    h-full
    w-full
    bg-slate-200
    bg-opacity-30
    rounded-xl
    grid
    place-items-center
    px-3
    py-2
    group-hover:bg-opacity-40
    transform
    transition
    duration-200
    ">
      <h1 className="
      font-fira-sans
      font-normal
      text-lg
      text-slate-50
      mx-auto
      ">
        {title}
      </h1>
    </div></div>
    <Modal
    size='regular'
    active={courseInfo}
    toggler={() => setCourseInfo(false)}
    >
      <ModalHeader
      toggler={() => setCourseInfo(false)}
      >
        <p className="text-xl font-path-ex font-semibold text-slate-700 pl-5 pr-7">
          Course info
        </p>
      </ModalHeader>
      <ModalBody>
        <div className="
        px-12
        py-11
        overflow-y-scroll
        scrollbar-hide
        lg:h-[600px]
        md:h-[528px]
        h-[390px]
        lg:w-[520px]
        md:w-[448px]
        w-[310px]
        rounded-xl
        bg-gradient-to-br
        from-sky-700
        to-indigo-800
        grid
        place-items-start
        space-y-4
        ">
          <h1 className="
          font-montserr
          font-normal
          text-lg
          text-slate-50
          ">
            Title:
          </h1>
          <h1 className="
          font-montserr
          font-semibold
          place-self-center
          text-lg
          text-slate-50
          ">
            {title}
          </h1>
          <h1 className="
          font-montserr
          font-normal
          text-lg
          text-slate-50
          ">
            Description:
          </h1>
          <div className="
          w-[80%]
          h-[75%]
          px-3
          py-2
          font-montserr
          font-light
          overflow-y-scroll
          scrollbar-hide
          bg-opacity-40
          bg-slate-100
          text-sky-100
          place-self-center
          rounded-lg
          ">
            {description}
          </div>
          <h1 className="
          font-montserr
          font-normal
          text-lg
          text-slate-50
          ">
            Duration:
          </h1>
          <h1 className="
          font-montserr
          font-semibold
          place-self-center
          text-lg
          text-slate-50
          ">
            {duration}
          </h1>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
        onClick={() => setCourseInfo(false)}
        color='red'
        buttonType='filled'
        block={true}
        ripple='light'
        className='font-montserr font-normal capitalize text-lg'
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
    </>
  )
}

export default ShortCard