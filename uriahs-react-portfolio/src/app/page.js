import Head from 'next/head'
import React from "react"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import mypic from '/Users/uriahmccarthy/Bootcamp/Homework/React-Portfolio/uriahs-react-portfolio/public/ProfilePic.jpeg'
import app1 from '/Users/uriahmccarthy/Bootcamp/Homework/React-Portfolio/uriahs-react-portfolio/public/Mood-Booster.png'
import app2 from '/Users/uriahmccarthy/Bootcamp/Homework/React-Portfolio/uriahs-react-portfolio/public/Schedule-App.png'
import app3 from '/Users/uriahmccarthy/Bootcamp/Homework/React-Portfolio/uriahs-react-portfolio/public/Tech-Blog.png'

import Navbar from './Navbar'



export default function Home() {
  return (
    


    <div>
      <Navbar/>
      <Head>
        <title>Uriahs Portfolio</title>
        <meta name="description" content="General"></meta>

      </Head>

      <main className='bg-white px-10 '>



        <section className="min-h-screen">

          <nav className='py-20 mb-12 flex justify-between'>
            <h1 className="text-xl font-burtons"></h1>
            <ul className="flex items-center">

              <li>
                <BsFillMoonStarsFill className=" cursor-pointer text-2xl" />
              </li>

              <li>
                <a className="bg-gradient-to-b from-cyan-500 to-teal-500 text-white px-4 py-2 ml-9" href="#">Resume</a>
              </li>

            </ul>
          </nav>


          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Kevin Uriah McCarthy</h2>
            <h3 className='text-2xl py-2'>App/Web Developer.</h3>
            <p className='text-me py-5 leading-8 text-grey-800'>
            Uriah is not the most traditional Navajo name, but it's my middle name. I moved to the city from my reservation with the goal of working in Tech. I started with designing & coordination in Pre-construction technologies. Now I works in developing the best user-friendly
              apps for helping businesses. Let's collaborate together
            </p>
          </div>

          <div className="relative mx-auto bg-gradient-to-t rounded-full w-80 h-80  overflow-hidden mb-14">
            <Image src={mypic} layout="fill" objectFit='cover' className=' rounded-full bg-gradient-to-tr' />
          </div>

          <h1>here's some of my work</h1>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Apps</h3>
            <div className=''>
              <h4 className="py-4 text-teal-600">Tools I Use </h4>
            </div>

            <div className=' flex justify-center'>

              <p className='text-grey-800 text-grey-800 py-1 p-5'>React.js </p>
              <p className='text-grey-800 text-grey-800 py-1 p-5'>Node.js</p>
              <p className='text-grey-800 text-grey-800 py-1 p-5'>Heroku</p>
              <p className='text-grey-800 text-grey-800 py-1 p-5'>Handlebars</p>

            </div>
          </div>

          <div>
            <div className='text-center shadow-xl p-10 my-10'>
              <Image src={app1} width={100} height={100} />
              <h3 className='text-lg font-medium pt=8 pb-2'>Mood-Booster</h3>
              <p className='py-2'>
                an app with daily dose of randomized humor and mood-boosting text that you can favorite and save for later
              </p>
            </div>
          </div>

          <div>
            <div className='text-center shadow-xl p-10 my-10'>
              <Image src={app2} width={100} height={100} />
              <h3 className='text-lg font-medium pt=8 pb-2'>Schedule App</h3>
              <p className='py-2'>
                an app with daily hour to hour schedule managing info you can put in and help manage tasks with
              </p>
            </div>
          </div>

          <div>
            <div className='text-center shadow-xl p-10 my-10'>
              <Image src={app3} width={100} height={100} />
              <h3 className='text-lg font-medium pt=8 pb-2'>Tech Blog </h3>
              <p className='py-2'>
                an app you can create an account and login to post blogs from your profile and view others posts
              </p>
            </div>
          </div>

        </section>

        <section>
          <div className='text-6xl flex justify-center gap-16 py-4 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
          </div>

        </section>

      </main>


    </div>

  )
}
