import React from 'react'
import TableDemo from '@/components/Table'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Layout from '@/Layout'
import { Calendar, Search, Merge, Wrench } from "lucide-react"

const sideBarItems = [
  {
    title: "Create Event",
    url: "/create-event",
    icon: Calendar,
  },
  {
    title: "Manage your event",
    url: "/mamage-event",
    icon: Wrench
  },
  {
    title: "Join Event Line",
    url: "/join-event-line",
    icon: Merge,
  }
]
const HomePage = () => {
    return (
        <Layout items={sideBarItems}>
          <div className="flex justify-center pl-40 py-8">
            {/* Container to center content and add space */}
            <div className="flex flex-col items-center w-full max-w-screen-lg px-6">
              <div className="w-full flex-grow">
                <TableDemo />
              </div>
              <Link to="create-event">
                <Button>Create Event</Button>
              </Link>
            </div>
          </div>
        </Layout>
      )
}

export default HomePage
