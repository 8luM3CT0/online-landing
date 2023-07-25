//front-end
import { Button, Icon } from '../..'
//back-end
import { useRouter } from 'next/router'
import { useState } from 'react'

function HeaderRoutes () {
  const router = useRouter()

  return (
    <div
      className='
        top-1 
        sticky 
        px-4 
        py-2 
        flex 
        items-center 
        justify-evenly 
        bg-slate-800
        mx-auto
        '
    >
    </div>
  )
}

export default HeaderRoutes
