import React from 'react'
import Layout from '@/Layout'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

const sideBarItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Create Event",
    url: "/create-event",
    icon: Calendar,
  }
]
const JoinEventLine = () => {
  return (
    <Layout items={sideBarItems}>
        <h1>join event</h1>
    </Layout>
  )
}

export default JoinEventLine
