import React from 'react'

export const modifyNumberValue = (val: string) => {
  return val.split('').filter((s: string) => !Number.isNaN(parseFloat(s))).join('')
}

export const convertLocaleString = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
  if (value) setValue(v => parseFloat(modifyNumberValue(v)).toLocaleString())
}

export const convertRawLocaleString = (value: string) => {
  return parseFloat(modifyNumberValue(value)).toLocaleString()
}