import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Layout from '@/Layout'
import { Calendar, Wrench } from "lucide-react"
import { LoopDots } from '@/components/LoopDots'
import { TypeAnimation } from 'react-type-animation';
import QRCode from '@/components/QRCode'
import EventsCreatedChart from '@/components/EventChart'
const sideBarItems = [
  {
    title: "Create Event",
    url: "/create-event",
    icon: Calendar,
  },
  {
    title: "Manage your event",
    url: "/manage/0",
    icon: Wrench
  }
]

const titleSequence = [
  // Same substring at the start will only be typed out once, initially
  'A Hackathon',
  2000, // wait 1s before replacing "Mice" with "Hamsters"
  'A Restaurant',
  2000,
  'A Product Launch',
  2000,
  'Any Event at All',
    2000,  
]
const HomePage = () => {

    return (
        <Layout items={sideBarItems}>
            <QRCode/>
          <div className="flex justify-center pt-20 w-full h-full">
            <div className="flex gap-5 text-4xl flex-col w-full max-w-screen-lg px-6">
              <div className='flex'>
                <div className='flex flex-col gap-5'>
                <div className='text-neutral-700'>Instantly Create a Queue For:</div>
                <TypeAnimation
                deletionSpeed={10}
                    sequence={titleSequence}
                    speed={20}
                    style={{fontSize:"2.25rem", fontWeight:"bold", color:"#1447e6"}}
                    repeat={Infinity}
                  />
                <div className='text-xl text-neutral-600'>In One Click</div>
                </div>
                <div className='flex justify-center items-center flex-1 text-base'>
                  <LoopDots/>
                </div>
              </div>
              <div className='w-full flex gap-20 pt-10'>
                <div className='flex w-full flex-col gap-2 text-center text-neutral-700 text-lg'>
                <div className="flex items-center justify-center">
                    <div className="group relative inline-block overflow-hidden border focus:outline-none focus:ring border-gray-100 w-full bg-gradient-to-br from-gray-100/50 to-white/50 backdrop-blur-[1px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-900/10 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-900/10 transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-900/10 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-900/10 transition-all duration-200 group-hover:h-full"></span>
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-l from-blue-400 to-blue-700 text-transparent bg-clip-text">Register Event</h2>
                      <p className="text-gray-600 mb-6">Ready to register your event on-chain for free?</p>
                      <Link to="create-event">

                      <Button className="w-full flex items-center justify-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Create New Event</span>
                      </Button>
                      </Link>
                    </div>
                  </div>
              
              </div>
              <div className='flex w-full flex-col gap-2 text-center text-neutral-700 text-lg'>
              <div className="flex items-center justify-center">
                    <div className="group relative inline-block overflow-hidden border focus:outline-none focus:ring border-gray-100 w-full bg-gradient-to-br from-gray-100/50 to-white/50 backdrop-blur-[1px] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-900/10 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-900/10 transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-900/10 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-900/10 transition-all duration-200 group-hover:h-full"></span>
                      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-l from-blue-400 to-blue-700 text-transparent bg-clip-text">Manage Event</h2>
                      <p className="text-gray-600 mb-6">Already own an event? Check on it here</p>
                      <Link to="manage/0">

                      <Button className="w-full flex items-center justify-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Manage An Event</span>
                      </Button>
                      </Link>
                    </div>
                  </div>
              </div>
              </div>
              <div className='pt-20'>
              <EventsCreatedChart/>
              </div>
            </div>
          </div>
        </Layout>
      )
}

export default HomePage
