import React from 'react'
import { Button } from './ui/button'
import {useAuth0} from '@auth0/auth0-react'

const LoginButton = () => {
const { loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    !isAuthenticated && (
        <Button onClick={() => loginWithRedirect()} className='w-4/5'>
            Sign Up / Sign In
        </Button>
    )


   
  )
}

export default LoginButton
