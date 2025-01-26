import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Layout from '@/Layout'
import { Calendar, Wrench } from "lucide-react"
import Profile from '@/components/Profile'
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
  'Or Any Event',
    2000,  
]
const HomePage = () => {

    return (
        <Layout items={sideBarItems}>
            <LoginButton/>
            <LogoutButon/>
          <div className="flex justify-center pt-20 w-full h-full">
            <div className="flex gap-5 text-4xl flex-col items-center w-full max-w-screen-lg px-6">
    
              <div className='text-neutral-700'>Instantly Create a Queue For:</div>
              <TypeAnimation
              deletionSpeed={10}
                  sequence={titleSequence}
                  speed={20}
                  style={{fontSize:"2.25rem", paddingLeft:"1rem", fontWeight:"bold", color:"#191b1f"}}
                  repeat={Infinity}
                />
              <div className='text-xl text-neutral-600'>In One Click</div>
              <div className='w-full flex justify-around'>
              <Link to="create-event">
                <Button>Create Event</Button>
              </Link>
              <Link to="create-event">
                <Button>Manage Event</Button>
              </Link>
              </div>
            </div>
          </div>
        </Layout>
      )
}

export default HomePage
