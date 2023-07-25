//front-end
import React from 'react'
import {AiOutlineSecurityScan, AiFillHome} from 'react-icons/ai'
//back-end
import { useRouter } from 'next/router'
import { FaConnectdevelop } from 'react-icons/fa'

function CyberHeader() {
const router = useRouter()
  return (
    <div
    className='
    mobIndexHeader
    '
    >
        <span 
        onClick={() => router.push('/')}
        className="
        w-[0.3]
        flex
        items-center
        space-x-2
        ">
            <AiOutlineSecurityScan
            style={{
                color: 'green',
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
                Cybersecurity
            </h2>
        </span>
        <span 
        onClick={() => router.push('/')}
        className="
        hover:shadow-2xl
        transform
        transition
        duration-200
        ease-in-out
        ">
        <AiFillHome 
        style={{
            color: 'indigo',
            fontSize: '2.0em',
            cursor: 'pointer'
        }}
        />
        </span>
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

export default CyberHeader