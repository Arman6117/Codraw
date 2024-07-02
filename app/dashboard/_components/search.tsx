'use client'
import {useEffect,ChangeEvent, useState} from 'react'
import { useRouter } from 'next/navigation'
import { useDebounceValue } from 'usehooks-ts'
import qs from 'query-string'

import { LuSearch } from 'react-icons/lu'
import { Input } from '@/components/ui/input'

const Search = () => {
    const [value,setValue] = useState("");
    const [debouncedValue,_] = useDebounceValue(value,500);
    const router = useRouter();

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }
    useEffect(()=> {
       const url = qs.stringifyUrl({
            url:'/dashboard',
            query:{
                search:debouncedValue || undefined
            }
        },{skipNull:true,skipEmptyString:true})
        router.push(url)
    },[debouncedValue,router])
  return (
    <div className='w-full  relative'>
      <LuSearch className='text-muted-foreground absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2'/>
      <Input
        placeholder='Search boards'
        className='max-w-[516px] w-full pl-9'
        onChange={handleChange}
        value={value}
       />
    </div>
  )
}

export default Search