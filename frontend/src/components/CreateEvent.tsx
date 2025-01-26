import * as React from "react"
import { DatePicker } from "./ui/datepicker"
import { Button } from "@/components/ui/button"
import { CloudUploadIcon } from "lucide-react"
import { useState, useEffect } from "react"
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

import { Textarea } from "./ui/textarea"
import { Link } from "react-router-dom"



export function CreateEvent() {

  const [queue_name, setqueueName] = useState("")
  const [queue_description, setqueueDescription] = useState("")
  const [queue_loc, setqueueLocation] = useState("")
  const [queue_date, setqueueDate] = useState("")

  useEffect(() => {
    // Callback function to run when 'date' changes
    const callback = () => {
        console.log(queue_name, queue_description, queue_loc, queue_date);
    };

    // Call the callback whenever 'date' changes
    callback();
  }, [queue_date, queue_description, queue_loc, queue_name]); // Dependency array: runs the effect when 'date' changes

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex items-center text-4xl font-semibold gap-2 mb-5">
        <CloudUploadIcon size={100} stroke="black" strokeWidth="1px"/><span>Cloud</span><span className="text-blue-600 -ml-1">Q</span>
      </div>
    <Card className="w-[800px] bg-slate-100 ">
      <CardHeader>
        <CardTitle className=" bg-gradient-to-l from-blue-500 to-blue-600 text-transparent bg-clip-text">Create new event</CardTitle>
        <CardDescription>Deploy your new event in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your event"  onChange={(value) => setqueueName(value.target.value)}/>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description of your event" className="h-32" onChange={(value) => setqueueDescription(value.target.value)}/>
            </div>    
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Location of your event" onChange={(value) => setqueueLocation(value.target.value)} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date">Date</Label>
              <DatePicker updateDate={(date: Date) => setqueueDate(date.toISOString().split('T')[0])}/>
            </div>
          </div>    
        </form> 
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to="/">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
