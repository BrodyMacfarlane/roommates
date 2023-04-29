import Link from "next/link";

export default function Header() {
  return (
    <div className='text-center mb-10'>
      <Link className='relative block overflow-hidden' href='/'>
        <div className="header-underline rounded-full bottom-0 absolute w-full h-3 bg-roommates-coral"></div>
        <h1 className='relative z-10 text-4xl sm:text-6xl lowercase pb-1'>Roommates</h1>
      </Link>
      <p className='opacity-30 mt-2'>oh my god, they were roommates.</p>
    </div>
  )
}