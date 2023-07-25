//front-end
import React from 'react'
import {DeskJobHeader, MobJobHeader, jobs, JobCard, MobJob} from '../components/'
//back-end
import { useState } from 'react'
import Head from 'next/head'

function JobFeed() {

  return (
    <div className='
    h-screen
    bg-gradient-to-bl
    from-cyan-900
    to-indigo-900
    overflow-hidden
    '>
        <DeskJobHeader />
        <MobJobHeader />
        <Head>
            <title>
                List of jobs available below
            </title>
        </Head>
        <main className="
        h-full
        lg:w-[70%]
        md:w-[80%]
        w-[95%]
        mx-auto
        bg-slate-400
        bg-opacity-40
        overflow-y-scroll
        grid
        lg:grid-cols-1
        place-items-center
        scrollbar-hide
        space-y-12
        py-[120px]
        ">
            {jobs && jobs?.jobs.map(data => (
                <JobCard 
                category={data?.category}
                title={data?.title}
                description={data?.description}
                mini_q={data?.minimum_qualifications}
                reco_q={data?.recommended_qualifications}
                salary={data?.salary}
                company={data?.company}
                work_h={data?.working_hours}
                />
            ))}
            {jobs && jobs?.jobs.slice(0, 6).map(data => (
                <MobJob 
                category={data?.category}
                title={data?.title}
                description={data?.description}
                mini_q={data?.minimum_qualifications}
                reco_q={data?.recommended_qualifications}
                salary={data?.salary}
                company={data?.company}
                work_h={data?.working_hours}
                />
            ))}
        </main>
    </div>
  )
}

export default JobFeed