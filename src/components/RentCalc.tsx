import React from 'react'
import { MoneyInput } from './Input'
import { convertLocaleString, convertRawLocaleString, modifyNumberValue } from '@/util/money'

const defaultRentPay = '0.00'

export default function RentCalc() {
  const [rentPriceValue, setRentPriceValue] = React.useState('')
  const [person1SalaryValue, setPerson1SalaryValue] = React.useState('')
  const [person2SalaryValue, setPerson2SalaryValue] = React.useState('')
  const [person1RentPay, setPerson1RentPay] = React.useState(defaultRentPay)
  const [person2RentPay, setPerson2RentPay] = React.useState(defaultRentPay)

  const calculateRentPay = (p1: string, p2: string, r: string) => {
    if (!person1SalaryValue || !person2SalaryValue || !rentPriceValue) return
    const person1SalaryNumber = parseFloat(modifyNumberValue(p1))
    const person2SalaryNumber = parseFloat(modifyNumberValue(p2))
    const rentPriceNumber = parseFloat(modifyNumberValue(r))

    const totalSalary = person1SalaryNumber + person2SalaryNumber
    const p1Percentage = person1SalaryNumber / totalSalary
    const p2Percentage = person2SalaryNumber / totalSalary

    const p1Rent = convertRawLocaleString(Math.ceil(rentPriceNumber * p1Percentage).toString())
    const p2Rent = convertRawLocaleString(Math.floor(rentPriceNumber * p2Percentage).toString())

    setPerson1RentPay(p1Rent)
    setPerson2RentPay(p2Rent)
  }

  React.useEffect(() => {
    calculateRentPay(person1SalaryValue, person2SalaryValue, rentPriceValue)
  }, [rentPriceValue, person1SalaryValue, person2SalaryValue])

  return (
    <div className=''>
      <MoneyInput
        value={rentPriceValue}
        setValue={setRentPriceValue}
        label="Rent Cost"
      />
      <div className="flex gap-8">
        <MoneyInput
          value={person1SalaryValue}
          setValue={setPerson1SalaryValue}
          label="Person 1 Monthly Net"
        />
        <MoneyInput
          value={person2SalaryValue}
          setValue={setPerson2SalaryValue}
          label="Person 2 Monthly Net"
        />
      </div>
      <div className='mt-4 sm:mt-8 bg-roommates-yellow bg-opacity-10 p-4 sm:p-8 rounded-lg'>
        <div className="mb-4 sm:mb-8">
          <h2 className='text-lg sm:text-2xl lowercase'><div className="opacity-90">Person 1 will pay </div>${person1RentPay}</h2>
        </div>
        <div className="mt-4 sm:mt-8">
          <h2 className='text-lg sm:text-2xl lowercase'><div className="opacity-90">Person 2 will pay </div>${person2RentPay}</h2>
        </div>
      </div>
    </div>
  )
}