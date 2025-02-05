'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Module {
  id: string
  title: string
  description: string
  duration: string
  progress: number
}

export default function Dashboard() {
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Simulating an API call to fetch modules
    const fetchModules = async () => {
      try {
        // Replace this with an actual API call
        const response = await fetch('/api/modules')
        const data = await response.json()
        setModules(data)
      } catch (error) {
        console.error('Failed to fetch modules:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchModules()
  }, [])

  const handleModuleClick = (moduleId: string) => {
    router.push(`/${moduleId}`)
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-4">Quantum Learning</h2>
        <nav>
          <ul className="space-y-4">
            {modules.map(module => (
              <li key={module.id}>
                <button
                  className="w-full text-left p-2 rounded-md hover:bg-gray-200 transition"
                  onClick={() => handleModuleClick(module.id)}
                >
                  {module.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Learning Dashboard</h1>
          <Link href="/profile">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Profile
            </button>
          </Link>
        </header>

        {/* Module Grid */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(module => (
              <div 
                key={module.id}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleModuleClick(module.id)}
              >
                <h2 className="text-2xl font-semibold mb-2">{module.title}</h2>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{module.duration}</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all" 
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}