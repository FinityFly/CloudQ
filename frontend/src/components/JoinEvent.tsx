import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLocation } from 'react-router-dom'
import { events } from "@/lib/data"
import { useState } from "react"
export function JoinEvent() {
  const location = useLocation()
    
  const initialData = events.find(item => item.id === location.pathname.slice(6));
  console.log(location.pathname.slice(6))
  const [data, setData] = useState(initialData?.attendees)
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Join event {location.pathname.slice(6)}</CardTitle>
        <CardDescription>
          <div>Enter your phone number and we'll message you when its you're turn!</div>

          <div className="font-semibold text-neutral-700 pt-5"># Attendees: {data ? data.length : 0}</div>
          <div className="font-semibold text-neutral-700 pt-5">EST Wait: {data ? data.length*5 : 0} mins</div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full max-w-md" 
                />
            </div>

          </div>    
        </form> 
      </CardContent>
      <CardFooter className="flex justify-center"> 
        <Button>Join Queue!</Button>
      </CardFooter>
    </Card>
  )
}
