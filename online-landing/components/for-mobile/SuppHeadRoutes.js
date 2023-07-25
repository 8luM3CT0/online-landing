//front-end
import { useRouter } from 'next/router'
import React from 'react'
import { BiSolidSchool } from 'react-icons/bi'
import { BsHddNetwork, BsInfoLg } from 'react-icons/bs'
import { FcAcceptDatabase } from 'react-icons/fc'
//back-end

function SuppHeadRoutes() {
    const router = useRouter()

    return (
    <div className='
    top-0
    z-50
    sticky
    flex
    items-center
    bg-slate-700
    bg-opacity-90
    justify-evenly
    w-full
    py-2
    '>
        <FcAcceptDatabase
        style={{
          color: 'white',
          fontSize: '2.0em',
          cursor: 'pointer',
          cursor: 'pointer'
        }}
        />
      <BsInfoLg
      style={{
        color: 'cadetblue',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}
      />
            <BiSolidSchool
      onClick={() => router.push('/course')}
      style={{
        color: 'greenyellow',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}
      />
            <BsHddNetwork
            onClick={() => router.push('/jobs')} 
      style={{
        color: 'cadetblue',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}
      />
    </div>
  )
}

export default SuppHeadRoutes