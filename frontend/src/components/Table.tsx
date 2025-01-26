import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { useState } from "react"
  import { events } from "@/lib/data"
  import { useLocation } from "react-router-dom"

  
  
  const TableDemo = () => {
    const location = useLocation();
  
    const initialData = events.find(item => item.id === location.pathname.slice(8));
    console.log(location.pathname.slice(8))
    const [data, setData] = useState(initialData?.attendees)
  
    const handleDelete = (index: number) => {
      const updatedData = data ? data.filter((_, i) => i !== index) : []
      setData(updatedData)
    }
  
    return (
      <Table className="w-[50vw]">
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Name</TableHead>
            <TableHead>Time Joined</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-right">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>1/26/2025</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="text-right">
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{data ? data.length :0} Users</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
  export default TableDemo
  