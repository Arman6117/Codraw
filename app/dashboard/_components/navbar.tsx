'use client'

import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="bg-green-500 flex items-center gap-x-4 p-5">
        <div className="lg:flex lg:flex-1 hidden ">
            Search
        </div>
        <UserButton />
    </div>
  )
}

export default Navbar