import React from 'react'
import NewButton from './new-button'
import List from './list'

const Sidebar = () => {
  return (
<aside className='fixed z-[1] h-full left-0 flex-col gap-y-4 bg-[#781b99] text-[#BEA5AB] w-[60px] p-3 flex '>
  <List/>
  <NewButton/>
</aside>
  )
}

export default Sidebar