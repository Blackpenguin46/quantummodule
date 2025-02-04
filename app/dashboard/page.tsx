'use client'

import Link from 'next/link'

export default function Dashboard() {
  const modules = [
    {
      id: 'quantum-basics',
      title: 'Quantum Basics',
      description: 'Introduction to quantum computing fundamentals',
      duration: '45 mins',
      progress: 0
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Learning Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map(module => (
          <Link 
            key={module.id}
            href={`/${module.id}`}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{module.title}</h2>
            <p className="text-gray-600">{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
} 