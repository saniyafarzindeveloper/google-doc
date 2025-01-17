import React from 'react'
import Link from 'next/link'
export default function Home() {
  return (
    <div>Home
    <p>click <Link href="/documents/123" className='text-blue-700 underline'> here </Link> to go to docs page</p>
    </div>
  )
}
