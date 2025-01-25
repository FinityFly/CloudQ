import React from 'react'
import Layout from '@/Layout'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { JoinEvent } from '@/components/JoinEvent'
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
        <JoinEvent/>
    </Layout>
  )
}

export default JoinEventLine
