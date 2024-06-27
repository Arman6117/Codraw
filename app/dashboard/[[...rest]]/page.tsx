import { SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <SignOutButton redirectUrl='/sign-in' signOutOptions={{redirectUrl:"/sign-in"}}/> */}
      <UserButton />
    </div>
  )
}

export default page