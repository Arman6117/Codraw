import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { MdDraw } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='flex justify-between'  >
       <Link href={'/'} className='flex justify-center items-center space-x-3'>
        <MdDraw className='text-[29px] text-gray-900'/>
        <h1 className='font-bold text-3xl'>Codraw</h1>
       </Link>
      <Button href='/register'>
           Sign Up
      </Button>
    </div>
  )
}

export default Navbar