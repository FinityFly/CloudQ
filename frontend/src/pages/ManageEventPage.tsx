import React from 'react'
import { useState } from 'react'
import TableDemo from '@/components/Table'
import { Input } from '@/components/ui/input'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
const ManageEventPage = () => {
    const location = useLocation();
    const [searchBy, setSearchBy] = useState("Event ID");
    const [search, setSearch] = useState("");
  return (
    <div className='w-[40vw]'>
        {
            location.pathname === "/manage/0" ?
            <>
            <h2>Search by:</h2>
            <Select onValueChange={(value) => setSearchBy(value)}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                    <SelectLabel>Search By:</SelectLabel>
                    <SelectItem value="eventID">Event ID</SelectItem>
                    <SelectItem value="eventName">Event Name</SelectItem>
                </SelectGroup>
                </SelectContent>
            </Select>
            <Input onChange={(value) => setSearch(value.target.value)} placeholder={`enter ${searchBy} here`}/>
            <Link to={`/manage/${search}`}>
            <Button> GO!</Button>
            </Link>
            </>
            :
            <TableDemo/>
 
        }
        
    </div>
  )
}

export default ManageEventPage