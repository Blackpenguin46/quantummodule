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
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Learning Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}