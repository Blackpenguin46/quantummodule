'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link 
            href="/" 
            className={pathname === '/' ? 'active' : ''}
          >
            Quantum Learning Module
          </Link>
        </li>
        <li>
          <Link 
            href="/quantum-basics"
            className={pathname === '/quantum-basics' ? 'active' : ''}
          >
            Quantum Basics
          </Link>
        </li>
        <li>
          <Link 
            href="/quantum-risks"
            className={pathname === '/quantum-risks' ? 'active' : ''}
          >
            Quantum Risks
          </Link>
        </li>
        <li>
          <Link 
            href="/quantum-safe-practices"
            className={pathname === '/quantum-safe-practices' ? 'active' : ''}
          >
            Quantum Safe Practices
          </Link>
        </li>
        <li>
          <Link 
            href="/business-adoption"
            className={pathname === '/business-adoption' ? 'active' : ''}
          >
            Business Adoption
          </Link>
        </li>
        <li>
          <Link 
            href="/closing-activity"
            className={pathname === '/closing-activity' ? 'active' : ''}
          >
            Closing Activity
          </Link>
        </li>
      </ul>
    </nav>
  )
} 