import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Layout from '@/Layout'
import { Calendar, Wrench } from "lucide-react"
import { LoopDots } from '@/components/LoopDots'
import LoginButton from '@/components/LoginButton'
import LogoutButon from '@/components/LogoutButton'
import { TypeAnimation } from 'react-type-animation';

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
            <LoginButton/>
            <LogoutButon/>
          <div className="flex justify-center pt-20 w-full h-full">
            <div className="flex gap-5 text-4xl flex-col w-full max-w-screen-lg px-6">
              <div className='flex'>
                <div className='flex flex-col gap-5'>
                <div className='text-neutral-700'>Instantly Create a Queue For:</div>
                <TypeAnimation
                deletionSpeed={10}
                    sequence={titleSequence}
                    speed={20}
                    style={{fontSize:"2.25rem", fontWeight:"bold", color:"#191b1f"}}
                    repeat={Infinity}
                  />
                <div className='text-xl text-neutral-600'>In One Click</div>
                </div>
                <div className='flex justify-center items-center flex-1 text-base'>
                  <LoopDots/>
                </div>
              </div>
              <div className='w-full flex justify-around'>
              <div className='flex flex-col gap-2 text-center text-neutral-700 text-lg'>
                <div>Want to register your event? One-click here:</div>
              <Link to="create-event">
                <Button>Create Event</Button>
              </Link>
              </div>
              <div className='flex flex-col gap-2 text-center text-neutral-700 text-lg'>
                <div>Want to manage your event? One-click here:</div>
              <Link to="create-event">
                <Button>Manage Event</Button>
              </Link>
              </div>
              </div>
            </div>
          </div>
        </Layout>
      )
}

export default HomePage
