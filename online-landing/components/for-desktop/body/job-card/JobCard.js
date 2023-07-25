//front-end
import React from 'react'
import { 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Button, 
    Icon } 
    from '../../..'
import {CiRead} from 'react-icons/ci'
//back-end
import { useState } from 'react'

function JobCard({
    category,
    title,
    description,
    mini_q,
    reco_q,
    salary,
    company,
    work_h
}) {
    const [jobInfo, setJobInfo] = useState(false)

  return (
    <>
    <div className='jobCardDiv'>
    <div className="
    flex
    items-center
    justify-evenly
    h-[70%]
    w-[70%]
    px-3
    py-2
    ">
        {/**company icon/company initials here */}
        <div className="
        rounded-xl
        bg-purple-600
        bg-opacity-80
        place-items-center
        grid
        h-[30%]
        w-[15%]
        ">
            <h1 className="
            font-montserr
            font-semibold
            text-xl
            text-slate-50
            ">
                {company?.slice(0, 2)}
            </h1>
        </div>
        {/**div here; grid and contains job title with company name at bottom */}
        <div className="
        w-full
        h-[30%]
        flex
        flex-col
        place-items-start
        space-y-3
        ml-12   
        ">
            <h1 className="
            font-montserr
            font-semibold
            text-slate-700
            text-2xl
            ">
                {title}
            </h1>
            <p className="
            font-fira-sans
            font-light
            text-slate-800
            text-base
            ">
                {company}
            </p>
        </div>
        <h4 className="
        w-[30%]
        font-montserr
        text-lg
        font-normal
        text-slate-800
        underline
        ">
            {work_h}
        </h4>
    </div>
        {/**button here; most likely to check or open modal for job */}
        <div className="
    grid
    place-items-center
    h-[70%]
    w-[30%]
    px-3
    py-2
    ">
        {/**
         * show the salary range here.
         * 
         */}
        <h4 className="
        font-path-ex
        font-semibold
        text-base
        text-slate-700
        ">
            {salary}
        </h4>
        {/**button here; opens a modal ?/ or just leads to 
         * another page which
         * shows the job details.
        */}
        <button 
        onClick={() => setJobInfo(true)}
        className="
        flex
        items-center
        space-x-3
        bg-transparent
        border-2
        px-3
        py-2
        border-slate-700
        rounded-xl
        hover:shadow-xl
        transform
        transition
        duration-300
        ease-liner
        ">
            <CiRead 
            style={{
                fontSize: '1.1em',
                color: 'gray'
            }}
            />
            <p className="
            font-montserr
            font-normal
            text-lg
            text-slate-700
            ">
                Read more
            </p>
        </button>
        
    </div>
    </div>
    <Modal
    size='lg'
    active={jobInfo}
    toggler={() => setJobInfo(false)}
    >
        <ModalHeader
        toggler={() => setJobInfo(false)}
        >
            <h1 className="
            font-fira-sans 
            font-semibold
            text-lg
            text-slate-800
            pl-6
            pr-8
            ">
                Job by: {company}
            </h1>
        </ModalHeader>
        <ModalBody>
            <div className="
            h-[900px]
            w-[780px]
            rounded-lg
            bg-gradient-to-br
            from-slate-900
            to-indigo-900
            flex
            flex-col
            space-y-4
            overflow-y-scroll
            scrollbar-hide
            ">
                <div className="
                w-[90%]
                h-[35%]
                mx-auto
                bg-cover
                bg-no-repeat
                bg-placeholder
                rounded-xl
                flex
                flex-col
                justify-between
                ">
                    <div className=""></div>
                    <div className="
                    scale-105
                    justify-self-start
                    h-[25%]
                    w-[12%]
                    rounded-lg
                    bg-indigo-400
                    grid
                    place-items-center
                    ">
                        <h1 className="
                        text-2xl
                        font-montserr
                        text-slate-50
                        font-semibold
                        ">
                            {company?.slice(0,2)}
                        </h1>
                    </div>
                </div>
                <div className="
                w-[90%]
                mx-auto
                flex
                items-center
                justify-between
                space-y-2
                ">
                <span className="
                h-full
                grid
                place-items-start
                ">
                    <h1 className="
                    font-montserr
                    font-normal
                    text-2xl
                    text-slate-100
                    ">
                        {title}
                    </h1>
                    <h1 className="
                    font-montserr
                    font-semibold
                    text-lg
                    text-slate-200
                    ">
                        {company}
                    </h1>
                </span>
                <h3 className="
                font-path-ex
                font-semibold
                text-2xl
                text-slate-200
                underline
                ">
                    {salary}
                </h3>
                </div>
                <div className="
                grid
                place-items-start
                space-y-3
                h-[15%]
                w-[98%]
                mx-auto
                ">
                    <h1 className="
                    font-montserr
                    font-normal
                    text-xl
                    text-slate-100
                    ml-12 
                    ">
                        Short summary
                    </h1>
                <div className="
                h-full
                rounded-lg
                w-[90%]
                mx-auto
                overflow-y-scroll
                scrollbar-thin
                scrollbar-track-slate-800
                scrollbar-thumb-indigo-500
                bg-slate-100
                bg-opacity-30
                font-path-ex
                text-base
                text-slate-100
                px-4
                py-3
                ">
                    {description}
                    
                </div>
                </div>
                <div className="
                grid
                place-items-start
                space-y-3
                h-[15%]
                w-[98%]
                mx-auto
                ">
                    <h1 className="
                    font-montserr
                    font-normal
                    text-xl
                    text-slate-100
                    ml-12 
                    ">
                        Minimum qualifications
                    </h1>
                <div className="
                h-full
                rounded-lg
                w-[90%]
                mx-auto
                overflow-y-scroll
                scrollbar-thin
                scrollbar-track-slate-800
                scrollbar-thumb-indigo-500
                bg-slate-100
                bg-opacity-30
                font-path-ex
                text-base
                text-slate-100
                px-4
                py-3
                ">
                    {mini_q}
                    
                </div>
                </div>
                <div className="
                grid
                place-items-start
                space-y-3
                h-[15%]
                w-[98%]
                mx-auto
                ">
                    <h1 className="
                    font-montserr
                    font-normal
                    text-xl
                    text-slate-100
                    ml-12 
                    ">
                        Recommended qualifications
                    </h1>
                <div className="
                h-full
                rounded-lg
                w-[90%]
                mx-auto
                overflow-y-scroll
                scrollbar-thin
                scrollbar-track-slate-800
                scrollbar-thumb-indigo-500
                bg-slate-100
                bg-opacity-30
                font-path-ex
                text-base
                text-slate-100
                px-4
                py-3
                ">
                    {reco_q}
                    
                </div>
                </div>
            </div>
        </ModalBody>
    </Modal>
    </>
  )
}

export default JobCard