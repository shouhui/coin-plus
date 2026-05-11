'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathName = usePathname();

  return (
    <header>
        <div className='main-container inner'>
            <Link href='/'>
                <Image src='logo.svg' alt='CoinPlus Logo' width={132} height={40} className='w-12 h-12' />
            </Link>

            <nav>
                <Link href='/' className={cn('nav-link', {
                    'is-active': pathName === '/',
                    'is-home': true,
                })}>Home</Link>

                <p>Search Model</p>

                <Link href='/coins' className={cn('nav-link', {
                    'is-active': pathName === '/coins',
                })}>All Coins</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header