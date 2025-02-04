'use client'

import { useState } from 'react'

export default function ModuleContent({ 
  sections 
}: { 
  sections: Array<{ title: string; content: React.ReactNode }> 
}) {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {sections[currentSection].content}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
          disabled={currentSection === 0}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentSection(prev => Math.min(sections.length - 1, prev + 1))}
          disabled={currentSection === sections.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  )
} 