//front-end
import React from 'react'
import {SiFrontendmentor} from 'react-icons/si'
import { FaConnectdevelop } from 'react-icons/fa'
import { AiFillHome, AiOutlineCloudServer } from 'react-icons/ai'
//back-end
import { useRouter } from 'next/router'


function BackEndHeader() {
const router = useRouter()
  return (
    <div
    className='
    mobIndexHeader
    '
    >
        <span className="
        w-[0.3]
        flex
        items-center
        space-x-2
        ">
            <AiOutlineCloudServer
            style={{
                color: 'goldenrod',
                fontSize: '2.0em',
                cursor: 'pointer'
            }}
            className='hover:shadow-2xl transform transition duration-200'
            />
            <h2 className="
            font-montserr
            font-normal
            text-lg
            text-sky-50
            ">
                Back-end
            </h2>
        </span>
            
        <span 
        onClick={() => router.push('/')}
        className="
        grid
        place-items-center
        space-y-2
        hover:shadow-2xl
        transform
        transition
        duration-200
        ease-in-out
        cursor-pointer
        ">
        <AiFillHome
        style={{
            color: 'green',
            fontSize: '2.0em',
            cursor: 'pointer'
        }}
        />
        </span>
        <span className="
        w-[0.3]
        bg-slate-60
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

export default BackEndHeader