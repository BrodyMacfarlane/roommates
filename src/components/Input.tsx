import React from 'react'
import { convertLocaleString, modifyNumberValue } from '@/util/money'

export function MoneyInput({ value, setValue, label }: { value: string, setValue: React.Dispatch<React.SetStateAction<string>>, label: string }) {
  return (
    <div className='my-2 sm:my-4 flex justify-center flex-col'>
      <h6 className='text-lg sm:text-2xl lowercase mb-1 sm:mb-2 opacity-90'>{label}</h6>
      <div className='relative'>
        <span className='absolute h-full flex items-center left-3 text-lg sm:text-2xl money opacity-90'>$</span>
        <input onBlur={() => convertLocaleString(value, setValue)} className='w-full bg-roommates-yellow bg-opacity-10 p-4 pl-8 text-xl rounded-lg' type='text' value={value} onChange={(e) => setValue(modifyNumberValue(e.target.value))} />
      </div>
    </div>
  )
}