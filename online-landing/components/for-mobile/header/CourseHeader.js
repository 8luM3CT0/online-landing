//front-end
import React from 'react'
import {
  BsHddNetwork, 
  BsInfoLg,
  FaConnectdevelop
} from '../../'
import { BiHome } from 'react-icons/bi'
import { FaDiscourse } from 'react-icons/fa'
//back-end
import { useRouter } from 'next/router'


function CourseHeader() {
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
        <FaDiscourse 
        style={{
          color: 'gold',
          fontSize: '2.0em',
          cursor: 'pointer',
          cursor: 'pointer'
        }}
        />
      </span>
      
            <BiHome
            onClick={() => router.push('/')}
      style={{
        color: 'green',
        fontSize: '1.5em',
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
            <BsHddNetwork 
            onClick={() => router.push('/jobs')}
      style={{
        color: 'cadetblue',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}
      />
      <span className="
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

export default CourseHeader