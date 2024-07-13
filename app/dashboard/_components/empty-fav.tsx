import Image from 'next/image'
import React from 'react'

const EmptyFav = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center space-y-2'>
        <Image
         src={'/empty-fav.svg'} 
         alt='empty search'
         width={240}
         height={240}
        />
        <h2 className='text-3xl font-bold mt-2'>No favorite</h2>
        <p className='text-muted-foreground text-sm mt-2'>Try Favoriting A Board</p>
    </div>
  )
}

export default EmptyFav