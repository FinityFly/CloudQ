import React from 'react'
import TableDemo from '@/components/Table'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div>SHDLKFJSLKDF</div>
      <TableDemo/>
      <Link to={"create-event"}>
        <Button>create event</Button>
      </Link>
    </>
  )
}

export default HomePage
