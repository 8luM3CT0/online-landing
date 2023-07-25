//front-end
import React from 'react'
import Head from 'next/head'
import { CDHeader, CMHeader, LongerCard, Modal } from '../../components'
//back-end
import { useState } from 'react'
import { courses } from '../../components'

function Cybersecurity() {
  console.log('Courses return for cybersecurity >>>>', courses?.cyb_data)
  
    return (
    <div className='
    h-screen
    bg-gradient-to-b
    from-emerald-900
    to-indigo-900
    overflow-hidden
    '>
        <CDHeader />
        <CMHeader />
        <Head>
            <title>Cybersecurity related items below</title>
        </Head>
        <main className="
        h-screen
        lg:w-[70%]
        w-[85%]
        mx-auto
        bg-sky-600
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
              Cybersecurity
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
              Cybersecurity refers to the practice of protecting computer 
              systems, networks, and data from unauthorized access, theft, 
              damage, or disruption. It involves a range of measures and 
              techniques designed to safeguard information technology 
              infrastructure and ensure the confidentiality, integrity, 
              and availability of digital assets.  Cybersecurity 
              encompasses various aspects, including technologies, 
              processes, and practices that aim to counteract threats 
              posed by malicious actors, such as hackers, 
              cybercriminals, and state-sponsored attackers. These 
              threats can take the form of malware, viruses, ransomware, 
              phishing attempts, social engineering, or unauthorized 
              access attempts.
              Effective cybersecurity involves multiple 
              layers of defense, which may include firewalls, 
              intrusion detection and prevention systems, encryption, 
              access controls, authentication mechanisms, 
              and regular security audits. It also entails ongoing 
              monitoring, incident response planning, and 
              employee awareness and training to mitigate risks.
              As technology evolves, so do the challenges and 
              complexities in maintaining robust cybersecurity. 
              Organizations and individuals alike need to stay 
              vigilant, adapt to emerging threats, and continually 
              update their security measures to ensure the protection 
              of sensitive information and critical infrastructure.
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
            {courses?.cyb_data && courses?.cyb_data.map(data => (
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

export default Cybersecurity