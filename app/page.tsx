import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Quantum Learning Module
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/quantum-basics"
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">Quantum Basics</h2>
          <p className="text-gray-600">Introduction to quantum computing concepts</p>
        </Link>

        <Link 
          href="/quantum-risks"
          className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-2">Quantum Risks</h2>
          <p className="text-gray-600">Understanding quantum computing risks</p>
        </Link>
      </div>
    </div>
  )
} 