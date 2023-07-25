import React from 'react'
import CourseSelection from '../course-card/CourseSelection'

function DesktopIndex() {
  return (
    <div className='forDesktop
    h-screen 
    overflow-y-scroll
    scrollbar-hide
    bg-slate-100 
    bg-no-repeat 
    bg-cover
    '>
        {/**top of home page */}
      <div className="
      h-[60%]
      w-screen
      bg-gradient-to-b
      from-orange-100
      to-red-100
      ">
        {/**top entrance message */}
        <div className="
        h-full
        w-full
        flex
        items-center
        px-2
        bg-gradient-to-br
        from-purple-800
        to-sky-900
        bg-opacity-80
        ">
          {/**div in the middle to show message  */}
          <div className="
          w-5/6
          mx-auto
          bg-slate-50
          bg-opacity-10
          shadow-xl
          shadow-slate-900
          rounded-lg
          h-full
          flex
          items-center
          ">
            {/**message */}
            <div className="
            h-full
            w-full
            flex
            px-2
            flex-col
            justify-evenly
            place-items-start
            space-y-4
            ">
              <h1 className="
            text-2xl
            font-ibm-mono
            font-normal
            w-1/3
            px-5
            text-sky-50
            ">
             {`<
              Online coding
              courses, at an
              affordable price
              />`}
            </h1>
            <h4 className="
            font-ubunto
            font-light
            text-base
            text-slate-50
            w-2/3
            px-3
            ">
              Start your coding journey with us, with affordable pricing
              and multiple choices that would transform you from a
              junior programmer to a master.
            </h4>
            <button
            className='
            w-3/4
            h-[50px]
            font-robot-slab
            font-light
            text-lg
            text-sky-50 
            mx-auto 
            rounded-lg 
            bg-slate-50 
            bg-opacity-10
            hover:shadow-xl
            hover:shadow-slate-800
            hover:bg-slate-700
            hover:bg-opacity-50
            transform
            transition
            duration-300
            ease-in-out
            '
            >
              Apply now
            </button>
            </div>
            {/**pic */}
            <div 
        className="
        h-full
        w-full
        bg-cover
        bg-no-repeat
        bg-headerpic
        rounded-md
        "
        ></div>
          </div>
        </div>
        {/**end of entrance message */}
        {/**a computer with code picture here */}
      </div>
      {/**end of top */}
      <div className="
      h-full
      bg-gradient-to-b
      from-red-100
      to-amber-300
      ">
        {/**div that will showcase the course that they specialize in */}
        <div className="
        scrollableCourses
        ">
          {/**message about the courses */}
          <div className="
          h-[100%]
          w-full
          bg-sky-600
          bg-opacity-20
          place-items-center
          ">
          </div>
          {/**div with the courses */}
          <div className="
          h-[100%]
          bg-slate-700
          bg-opacity-30
          flex
          items-center
          space-x-14
          w-full
          overflow-x-scroll
          scrollbar-thin
          scrollbar-track-slate-700
          scrollbar-thumb-indigo-400      
          "></div>

        </div>
        {/**end of the div */}
      </div>
    </div>
  )
}

export default DesktopIndex