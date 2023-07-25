//front-end
import React from 'react'
import {SiFrontendmentor} from 'react-icons/si'
import { FaConnectdevelop } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
//back-end
import { useRouter } from 'next/router'


function FrontEndHeader() {
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
            <SiFrontendmentor
            style={{
                color: 'gold',
                fontSize: '2.0em',
                cursor: 'pointer'
            }}
            className='hover:shadow-2xl transform transition duration-200'
            />
        </span>
            
        <span 
        onClick={() => router.push('/')}
        className="
        grid
        place-items-center
        cursor-pointer
        space-y-2
        hover:shadow-2xl
        transform
        transition
        duration-200
        ease-in-out
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

export default FrontEndHeader