import React from 'react'
import { Button } from './ui/button'
import {useAuth0} from '@auth0/auth0-react'

const LogoutButon = () => {
const { logout, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
        <Button onClick={() => logout()}>
            Sign Out
        </Button>
    )


   
  )
}

export default LogoutButon
