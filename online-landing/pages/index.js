//front-end
import Head from 'next/head'
import {
  Button,
  CourseCard,
  DIHeader,
  Icon,
  MIHeader,
  ReviewCard,
  course_card,
  reviews
} from '../components/'
//back-end


export default function Home () {
  

  return (
    <div
      className='
    h-screen 
    overflow-y-scroll
    scrollbar-hide
    bg-sky-900
    bg-no-repeat 
    bg-cover
    '
    >
      <Head>
        <title>Welcome to an academy for excellence</title>
      </Head>
      <DIHeader />
      <MIHeader />
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
          shadow-md
          shadow-slate-900
          rounded-lg
          h-[90%]
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
            topText
            ">
             {`<
              Online software
              courses, at an
              affordable price
              />`}
            </h1>
            <h4 className="
toptextDesc
            ">
              Start your journey with us, with affordable pricing
              and multiple choices that would transform you from a
              junior to a master.
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
          flex
          flex-col
          justify-evenly
          px-5
          py-7
          ">
            <h1 className="
            courseTitleHeader
            ">
              From zero to hero, in a short time.
            </h1>
            <p className="
            courseTitleMess
            ">
              Learn and master skills in the world of software by 
              checking our course sites at the right, all taught 
              by the best instructors around, and see job 
              offerings that fit your expertise. 
            </p>
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
          ">
            {course_card && course_card?.course_names?.map(data => (
              <CourseCard 
              backgroundImage={data?.bgImg}
              title={data?.title}
              router_link={data?.router_link}
              />
            ))}
            </div>
        </div>
        {/**end of the div */}
        <div className="
        h-[90%]
        bg-gradient-to-br
        from-slate-700
        to-violet-800
        place-items-start
        px-3
        py-2
        ">
          <h1 className="
          font-path-ex 
          font-thin
          text-3xl
          pl-4 
          py-3
          text-indigo-100">
            Reviews
          </h1>
          <div className="
            reviewCard
          ">
            {reviews && reviews?.reviews.map(data => (
              <ReviewCard 
              name={data?.name}
              image={data?.image}
              review={data?.review}
              date={data?.date}
              />
            ))}
          </div>
        </div>
      </div>
          </div>
  )
}

