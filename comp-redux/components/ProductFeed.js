//front-end
import React from 'react'
//back-end
import { InvProduct } from './'
//back-end

function ProductFeed ({ hit }) {
  return (
    <div
      className='
    grid-cols-4
    mx-auto
    my-auto
    grid
    place-items-center
    px-3
    py-4
    h-[90%]
    w-[95%]
    overflow-y-scroll
    scrollbar-thin
    scrollbar-track-slate-600
    scrollbar-thumb-sky-600
    '
    >
      {hit && <InvProduct hit={hit} />}
    </div>
  )
}

export default ProductFeed
