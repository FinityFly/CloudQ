import { CalendarIcon, MapPinIcon, QrCodeIcon, UsersIcon, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import QRCode from "./QRCode"
interface EventCardProps {
  name: string
  description: string
  attendees: number;
  date: string
  location: string
  id:string
}

export function EventCard({ name, description, attendees, date, location, id}: EventCardProps) {
  return (
    <div className="w-full max-w-3xl">
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <Link to={`/manage/${id}`} key={id}>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex pt-5 gap-12">
            <div className="flex items-center gap-2">
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
            <span>{attendees} Attendees</span>
            </div>
            <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-muted-foreground" />
            <span>{location}</span>
            </div>
        </div>
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" className="">
         
            <>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </>
            
        </Button>

        <QRCode value={`https://cloudq.netlify.app/join/${id}`}/>

      </CardFooter>
    </Card>
    </div>
  )
}

