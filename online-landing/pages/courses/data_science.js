//front-end
import React from 'react'
import Head from 'next/head'
import { DSDHeader, DSMHeader, LongerCard } from '../../components'
//back-end
import { useState } from 'react'
import { courses } from '../../components'

function DataScience() {
  return (
    <div className='
    h-screen
    bg-gradient-to-b
    from-green-800
    to-slate-800
    overflow-hidden
    '>
        <DSDHeader />
        <DSMHeader />
        <Head>
            <title>Data science related items below</title>
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
              Data science
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
              Data science is an interdisciplinary field that involves extracting insights, knowledge, and meaningful information from data using scientific methods, processes, algorithms, and tools. It combines elements from various disciplines such as mathematics, statistics, computer science, and domain expertise to analyze and interpret complex data sets.

Data scientists use a combination of programming skills, statistical modeling techniques, and data visualization to collect, clean, and analyze large volumes of structured and unstructured data. They employ advanced algorithms and machine learning techniques to uncover patterns, trends, and correlations that can drive decision-making and solve complex problems.

The data science process typically involves several stages, including data collection, data cleaning and preprocessing, exploratory data analysis, feature engineering, model building, model evaluation, and deployment. Data scientists often work with programming languages like Python or R and use libraries and frameworks like TensorFlow or scikit-learn to implement machine learning algorithms and build predictive models.

Data science finds applications in various domains, including business, healthcare, finance, marketing, and social sciences. It helps organizations make data-driven decisions, optimize processes, detect anomalies, personalize user experiences, and gain insights into customer behavior.

As data continues to grow exponentially, data science plays a crucial role in extracting valuable information from this vast amount of data. Data scientists play a vital role in analyzing and interpreting data, uncovering hidden patterns, and generating actionable insights to drive innovation, improve efficiency, and solve complex problems in a wide range of industries.
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
            {courses?.dsci_data && courses?.dsci_data.map(data => (
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

export default DataScience