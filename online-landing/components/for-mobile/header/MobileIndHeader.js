//front-end
import React from 'react'
import {
  BiSolidSchool, 
  BsHddNetwork, 
  BsInfoLg,
  FaConnectdevelop,
  FcAcceptDatabase
} from '../../'
//back-end
import { useRouter } from 'next/router'

function MobileIndHeader() {
  const router = useRouter()
  return (
    <div
    className='
    mobIndexHeader
    '
    >
      <span className="
      w-[0.3]
      px-3
      mx-2
      ">
        <FcAcceptDatabase 
        style={{
          color: 'white',
          fontSize: '2.0em',
          cursor: 'pointer',
          cursor: 'pointer'
        }}
        />
      </span>
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
      <span 
              onClick={() => router.push('/support')}
      className="
      w-[0.3]
      space-x-2
      flex
      items-center
      bg-slate-600
      ">
        <FaConnectdevelop 
        style={{
          color: 'cyan',
          fontSize: '1.5em'
        }}
        />
      </span>
    </div>
  )
}

export default MobileIndHeader