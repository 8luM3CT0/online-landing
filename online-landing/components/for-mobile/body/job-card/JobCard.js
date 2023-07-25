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
//back-end
import { useState } from 'react'
import { CiRead } from 'react-icons/ci'

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
    <div className='mobJobCard'>
    <div className="
    flex
    items-center
    h-[70%]
    px-3
    py-2

    ">
        {/**company icon/company initials here */}
        <div className="
        rounded-3xl
        bg-purple-600
        bg-opacity-80
        place-items-center
        grid
        p-4
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
    </div>
        {/**button here; most likely to check or open modal for job */}
        <div className="
    grid
    place-items-start
    space-y-3
    px-3
    py-2
    ">
        {/**company icon/company initials here */}
        {/**div here; grid and contains job title with company name at bottom */}
        <h1 className="
        text-lg
        font-montserr
        font-semibold
        text-slate-700
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
    <button
    onClick={() => setJobInfo(true)}
    className="
    flex
    items-center
    space-x-3
    bg-purple-600
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
            color: 'whitesmoke'
        }}
        />
    </button>    
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
            h-[450px]
            w-[300px]
            rounded-lg
            bg-gradient-to-br
            from-slate-900
            to-indigo-900
            grid
            place-items-center
            pb-[140px]
            space-y-5
            overflow-y-scroll
            scrollbar-hide
            ">
                <div className="
                mt-5
                w-full
                mx-auto
                grid
                place-items-start
                px-3
                py-2
                space-y-4
                ">
                <span className="
                h-full
                grid
                place-items-start
                ">
                    <h1 className="
                    font-montserr
                    font-normal
                    text-lg
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
                text-base
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
                h-[150px]
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
                h-[150px]
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
                h-[150px]
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