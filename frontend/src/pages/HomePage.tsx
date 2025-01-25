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
      <div>SHDLKFJSLKDF</div>
      <TableDemo/>
      <Link to={"create-event"}>
        <Button>create event</Button>
      </Link>
    </Layout>
  )
}

export default HomePage
