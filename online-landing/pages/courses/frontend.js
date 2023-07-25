//front-end
import React from 'react'
import Head from 'next/head'
import { FEDHeader, FEMHeader, LongerCard } from '../../components'
//back-end
import { useState } from 'react'
import { courses } from '../../components'

function Frontend() {
  return (
    <div className='
    h-screen
    bg-gradient-to-b
    from-orange-600
    to-cyan-800
    overflow-hidden
    '>
        <FEDHeader />
        <FEMHeader />
        <Head>
            <title>Frontend related items below</title>
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
              Front-end development
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
              Front-end development refers to the process of creating and implementing the user interface (UI) and user experience (UX) elements of a website or web application. It involves designing and coding the visual and interactive components that users interact with directly.

Front-end developers are responsible for translating design concepts into code using programming languages such as HTML, CSS, and JavaScript. HTML (Hypertext Markup Language) provides the structure and content of a web page, while CSS (Cascading Style Sheets) defines the presentation and layout. JavaScript adds interactivity and dynamic functionality to enhance user experience.

Front-end developers work closely with designers and back-end developers to ensure that the website or application functions as intended and delivers a seamless user experience. They focus on optimizing the performance, responsiveness, and accessibility of the front-end components across different devices and browsers.

In addition to coding, front-end developers often utilize libraries and frameworks, such as React, Angular, or Vue.js, to streamline development and enhance productivity. These tools provide pre-built components, efficient data management, and other features that facilitate the creation of complex and interactive interfaces.

Front-end development requires a combination of technical skills, creativity, and attention to detail. It involves staying updated with the latest web standards, design trends, and best practices to deliver visually appealing and user-friendly interfaces that meet the needs of both clients and end-users.
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
            {courses?.fend_data && courses?.fend_data.map(data => (
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

export default Frontend