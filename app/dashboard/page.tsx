import { SignOutButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
        <SignOutButton redirectUrl='/'/>
    </div>
  )
}

export default page