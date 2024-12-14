import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <h1 className=' bg-[red] text-center text-[28px] ' >
        <Link href={"/"} > Home  |</Link>
        <Link href={"/about"} > About | </Link>
        <Link href={"/gallery"} > Gallery  | </Link>
        <Link href={"/cart"} > Cart </Link>
        
      </h1>
    </div>
  )
}
