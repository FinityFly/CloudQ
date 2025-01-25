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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "./ui/textarea"

export function CreateEvent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create new event</CardTitle>
        <CardDescription>Deploy your new event in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your event" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Description of your event" className="h-32"/>
            </div>    
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Location of your event" />
            </div>
          </div>    
        </form> 
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
