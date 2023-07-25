//front-end
import React from 'react'
import {
    BsHddNetwork, 
    BsInfoLg,
    FaConnectdevelop
  } from '../../'
  import { BiHome, BiSolidSchool } from 'react-icons/bi'
  import { FaDiscourse } from 'react-icons/fa'
import { useRouter } from 'next/router'
//back-end
function JobsHeader() {
  const router = useRouter()

  return (
    <div className='
    mobileJobHeader
    '>
                <span className="
        w-[0.3]
        flex
        items-center
        space-x-3
        ">
            <BsHddNetwork 
            style={{
                color: 'goldenrod',
                fontSize: '2.0em',
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
            <BiSolidSchool 
      onClick={() => router.push('/course')}
      style={{
        color: 'greenyellow',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}
      />
            <BsInfoLg 
      style={{
        color: 'cadetblue',
        fontSize: '1.5em',
        cursor: 'pointer'
      }} />
        <span 
                onClick={() => router.push('/support')}
        className="
        w-[0.3]
        bg-slate-600
        rounded-lg
        px-3
        py-2
        flex
        items-center
        space-x-3
        cursor-pointer
        hover:shadow-xl
        hover:bg-indigo-700
        transform
        transition
        duration-200
        ease-in-out
        group
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

export default JobsHeader
