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
  
  const initialData = [
    {
      name: "John Doe",
      timeJoined: "2023-01-01",
      phoneNumber: "+1 234 567 890",
    },
    {
      name: "Jane Smith",
      timeJoined: "2023-02-15",
      phoneNumber: "+1 987 654 321",
    },
    {
      name: "Alice Johnson",
      timeJoined: "2023-03-22",
      phoneNumber: "+1 555 123 456",
    },
    {
      name: "Bob Brown",
      timeJoined: "2023-04-10",
      phoneNumber: "+1 333 777 888",
    },
  ]
  
  const TableDemo = () => {
    const [data, setData] = useState(initialData)
  
    const handleDelete = (index: number) => {
      const updatedData = data.filter((_, i) => i !== index)
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
          {data.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.timeJoined}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
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
            <TableCell className="text-right">{data.length} Users</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
  export default TableDemo
  