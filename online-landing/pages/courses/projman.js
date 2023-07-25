//front-end
import React from 'react'
import Head from 'next/head'
import { PMDHeader, PMMHeader, LongerCard } from '../../components'
//back-end
import { useState } from 'react'
import { courses } from '../../components'

function ProjMan() {
  return (
    <div className='
    h-screen
    bg-gradient-to-b
    from-sky-600
    to-cyan-900
    overflow-hidden
    '>
        <PMDHeader />
        <PMMHeader />
        <Head>
            <title>Project management related items below</title>
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
              Project management
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
              Project management is the discipline of planning, organizing, and managing resources to successfully achieve specific goals and objectives within a defined timeframe. It involves the application of knowledge, skills, tools, and techniques to effectively execute projects and deliver desired outcomes.

In project management, a project is a temporary endeavor with a unique set of activities, aimed at creating a distinct product, service, or result. Projects are typically characterized by their defined scope, specific objectives, and limited duration.

The role of a project manager is to oversee the entire project lifecycle, from initiation to completion. This includes activities such as defining project goals, creating a project plan, allocating resources, coordinating team members, monitoring progress, managing risks, and ensuring the project is delivered within the agreed-upon constraints of time, cost, and quality.
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
            {courses?.projman_data && courses?.projman_data.map(data => (
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

export default ProjMan