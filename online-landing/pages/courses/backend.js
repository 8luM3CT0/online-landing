//front-end
import React from 'react'
import Head from 'next/head'
import { BEDHeader, BEMHeader, LongerCard } from '../../components'
//back-end
import { useState } from 'react'
import { courses } from '../../components'

function Backend() {
  return (
    <div className='
    h-screen
    bg-gradient-to-b
    from-green-800
    to-slate-800
    overflow-hidden
    '>
        <BEDHeader />
        <BEMHeader />
        <Head>
            <title>Backend related items below</title>
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
              Back-end development
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
              Back-end development refers to the process of building and maintaining the server-side components of a website or web application. It focuses on the logic, databases, and infrastructure that enable the functioning and storage of data behind the scenes.

Back-end developers work with programming languages such as Python, Java, Ruby, or PHP to create the server-side code that powers the dynamic functionality of a website. They handle tasks such as data storage and retrieval, server-side processing, security, and integration with external systems or APIs.

Back-end development involves working with databases, such as MySQL, PostgreSQL, or MongoDB, to manage and manipulate data efficiently. Developers use frameworks and libraries, such as Django, Ruby on Rails, or Laravel, to streamline development and adhere to best practices.

Back-end developers collaborate closely with front-end developers and designers to ensure smooth communication between the server and the user interface. They focus on optimizing performance, scalability, and security, ensuring that the application can handle a large number of users and protect sensitive data.

In addition to coding, back-end developers are responsible for tasks like server configuration, deployment, and maintenance. They need to be familiar with concepts like APIs (Application Programming Interfaces), caching, session management, and server administration.

Back-end development requires strong problem-solving skills, logical thinking, and attention to detail. Developers need to understand the requirements of the application and design efficient, robust, and scalable solutions that meet those requirements while considering factors like security, performance, and reliability.
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
            {courses?.bend_data && courses?.bend_data.map(data => (
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

export default Backend