//front-end
import React from 'react'
import {CourseHeader, MobCourseHeader, ShortCard} from '../components/'
import Head from 'next/head'
//back-end
import { courses } from '../components/'

function Course() {
  return (
    <div className='
    overflow-y-scroll
    scrollbar-hide
    h-screen
    flex-col
    bg-gradient-to-br
    from-cyan-500
    to-purple-800
    '>
        <CourseHeader />
        <MobCourseHeader />
      <Head>
        <title>Whole list of courses available</title>
        
        </Head>
        <main className="
        h-screen
        lg:w-[70%]
        w-[95%]
        bg-slate-100
        bg-opacity-20
        flex
        flex-col
        px-8
        py-6
        mx-auto
        overflow-y-scroll
        scrollbar-thin
        scorllbar-track-slate-800
        scrollbar-thumb-indigo-300
        space-y-12
        pb-[120px]
        ">
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              Cybersecurity
            </h1>
            <div className="
            courseDiv
            ">
                <div className="
                courseIntDiv
                bg-slate-700
                bg-opacity-70
                ">
                  {courses?.cyb_data && courses?.cyb_data.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              Data science
            </h1>
                        <div className="
            courseDiv
            ">
                                <div className="
                courseIntDiv
                bg-sky-700
                bg-opacity-30
                ">
                                    {courses?.dsci_data && courses?.dsci_data.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              Front-end
            </h1>
                        <div className="
            courseDiv
            ">
                                <div className="
                courseIntDiv
                bg-indigo-700
                bg-opacity-30
                ">
                                    {courses?.fend_data && courses?.fend_data.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              Project management
            </h1>
                        <div className="
            courseDiv
            ">
                                <div className="
                courseIntDiv
                bg-cyan-700
                bg-opacity-30
                ">
                                    {courses?.projman_data && courses?.projman_data.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              Software engineering
            </h1>
                        <div className="
            courseDiv
            ">

                                <div className="
                courseIntDiv
                bg-purple-700
                bg-opacity-30
                ">
                                    {courses?.se_data && courses?.se_data.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              UX design
            </h1>
                        <div className="
            courseDiv
            ">
                                <div className="
                courseIntDiv
                bg-teal-700
                bg-opacity-30
                ">
                                    {courses?.ux_design && courses?.ux_design.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
            <h1 className="
            text-2xl
            font-montserr
            font-normal
            text-sky-50
            ">
              Back-end
            </h1>
                        <div className="
            courseDiv
            ">
                                <div className="
                courseIntDiv
                bg-slate-700
                bg-opacity-70
                ">
                                    {courses?.bend_data && courses?.bend_data.map(data => (
                    <ShortCard 
id={data?.id}
title={data?.title}
duration={data?.duration}
description={data?.description}
/>
                  ))}
                </div>
            </div>
        </main>  
    </div>
  )
}

export default Course