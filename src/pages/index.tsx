import Image from 'next/image'
import { Inter } from 'next/font/google'
import RentCalc from '@/components/RentCalc'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-12 ${inter.className}`}
    >
      <div className='text-center mb-10'>
        {/* <p className='opacity-30'>and they were</p> */}
        <h1 className='text-4xl sm:text-6xl lowercase'>Roommates</h1>
        <p className='opacity-30 mt-2'>oh my god, they were roommates.</p>
      </div>
      <div className='rent-calculator-outer-container'>
        <RentCalc />
      </div>
    </main>
  )
}
