//front-end
import React from 'react'
import Head from 'next/head'
import { UXDHeader, UXMHeader, LongerCard } from '../../components'
//back-end
import { useState } from 'react'
import { courses } from '../../components'

function SoftEng() {
  return (
    <div className='
    h-screen
    bg-gradient-to-b
    from-emerald-600
    to-indigo-600
    overflow-hidden
    '>
        <UXDHeader />
        <UXMHeader />
        <Head>
            <title>UX design related items below</title>
        </Head>
        <main className="
        h-screen
        lg:w-[70%]
        w-[85%]
        mx-auto
        bg-slate-700
        bg-opacity-20
        overflow-y-scroll
        scrollbar-hide
        pb-[120px]
        ">
                 <div className="
          h-[0.4]
          w-[90%]
          mx-auto
          grid
          place-items-center
          space-y-5
          px-4
          py-3
          ">
            <h1 className="
            font-montserr
            font-semibold
            text-4xl
            text-sky-50
            ">
              UX design
            </h1>
            <div className="
            h-[60%]
            w-[70%]
            bg-slate-200
            px-4
            py-8
            bg-opacity-20
            rounded-lg
            line-clamp-6
            overflow-y-scroll
            scrollbar-thin
            scrollbar-track-indigo-700
            scrollbar-thumb-violet-200
            text-slate-50
            text-xl
            ">
           UX design, short for User Experience design, is a discipline that focuses on creating meaningful and satisfying experiences for users when interacting with products, services, or systems. It involves understanding user needs, behaviors, and preferences to design intuitive, usable, and enjoyable experiences.
</div>
          </div>
          {/**end of intro text */}
          {/**courses below */}
          <div className="
          h-[0.6]
          w-full
          overflow-y-scroll
          scrollbar-hide
          mx-auto
          px-4
          py-3
          pb-[210px]
          space-y-6
          ">
            {courses?.ux_design && courses?.ux_design.map(data => (
              <LongerCard
              id={data?.id}
              key={data?.id}
              title={data?.title}
              description={data?.description}
              duration={data?.duration}
              />
            ))}
          </div>
        </main>
    </div>
  )
}

export default SoftEng