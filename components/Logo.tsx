import Link from '@/node_modules/next/link'
import React from 'react'

const Logo = () => {
    return (
        <div>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 text-primary font-display font-semibold text-xl">
                {/* <Scale className="h-6 w-6 text-accent" /> */}
                <span>Hakan Buldu</span>
            </Link>
        </div>
    )
}

export default Logo
