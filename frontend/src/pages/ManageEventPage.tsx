import React from 'react'
import TableDemo from '@/components/Table'
import { useLocation, Link } from 'react-router-dom'
import { Calendar, Home } from 'lucide-react'
import { useState } from "react"
import { EventCard } from '@/components/EventCard'
import { events } from "../lib/data"
import { Button } from '@/components/ui/button'
import Layout from '@/Layout'
const ManageEventPage = () => {
    const location = useLocation();
    const [searchType, setSearchType] = useState("id")
    const [searchQuery, setSearchQuery] = useState("")

    const event_name = "McHacks 12"
    const event_location = "Leacock RM-XXX"
        const phone = '+16138099825';
        //const [phone, setPhone] = useState('');
        const [message, setMessage] = useState(`
            🎉 Congratulations! 🎉 You're next in line for *${event_name}*! 🚶‍♂️🚶‍♀️ Head to *${event_location}* now and be ready—your turn is coming up! ⏳🔜
            💬 Stay tuned for further updates! 📱
          `);
          
        const sendSMS = async () => {
          if (!phone) {
            alert('Please enter a phone number');
            return;
          }
      
          try {

            const response = await fetch(`${window.location.origin}/.netlify/functions/sendSMS`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  phone,
                  message,
                }),
              });

            const data = await response.json();
      
            if (data.success) {
              alert('SMS sent successfully!');
            } else {
              alert('Error: ' + data.error);
            }
          } catch (error) {
            console.error('Error sending SMS:', error);
            alert('Failed to send SMS');
          }
        };    


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(`Searching by ${searchType}: ${searchQuery}`)
        // Implement your search logic here
    }

    const handleCancel = () => {
        setSearchQuery("")
        setSearchType("id")
    }
    const sideBarItems = [
        {
          title: "Home",
          url: "/",
          icon: Home,
        },
        {
          title: "Create an event",
          url: "/create-event",
          icon: Calendar
        }
      ]
  return (
    <Layout items={sideBarItems}>
    <div className='w-full'>
        {
            location.pathname === "/manage/0" ?
                <div className='flex flex-col items-center w-full gap-10 pt-24'>
                    {
                        events.map((event, index) => (
                            
                            <EventCard id={event.id} name = {event.name} description={event.description} attendees={event.attendees.length} date={event.date} location={event.location}/>
                            
                        ))
                    }
                </div>

            :
            <div className='flex flex-col gap-20 justify-center w-full items-center h-screen'>
            <TableDemo/>
            <Button onClick={sendSMS}>Send Push Notification</Button>
            </div>
 
        }
        
    </div>
    </Layout>
  )
}

export default ManageEventPage