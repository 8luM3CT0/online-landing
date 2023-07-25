//front-end
import React from 'react'
//back-end

function LongerCard({
    id,
    title,
    description,
    duration
}) {
  return (
    <div 
    key={id}
    className='
    longerCard
    '>
        <span className="
        flex
        items-center
        w-full
        justify-between
        h-[0.3]
        border-b-2
        border-slate-50
        ">
            <h1 className="
            text-xl
            font-fira-sans
            text-sky-50
            font-semibold
            ">
                {title}
            </h1>
            <p className="
            text-lg
            font-fira-sans
            font-normal
            text-sky-100
            ">
                {duration}
            </p>
        </span>
        <div className="
        h-[0.4]
        w-full
        px-5
        py-4
        overflow-y-scroll
        text-sky-200
        scrollbar-hide
        font-path-ex
        text-base
        font-light
        ">
            {description}
        </div>
    </div>
  )
}

export default LongerCard