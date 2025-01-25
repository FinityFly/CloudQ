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


import { Textarea } from "./ui/textarea"

export function JoinEvent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Join event</CardTitle>
        <CardDescription>Enter your phone number and we'll message you when its you're turn!</CardDescription>
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
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
