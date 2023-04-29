import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

export function HomeLink({ href, text }: { href: Url, text: string }) {
  return (
    <Link className='relative my-4 max-w-2xl w-full text-center rounded-lg overflow-hidden' href={href}>
      <div className="link-bg absolute z-0 w-full"></div>
      <div className='p-8 w-full relative z-10'>
        <h2 className='text-roommates-beige text-xl sm:text-3xl uppercase'>{text}</h2>
      </div>
    </Link>
  )
}