import React from 'react'
import PrimaryButton from './Components/PrimaryButton'

function App() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 dark:from-gray-900 dark:to-violet-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-8">
          Hello React! 👋
        </h1>
        
        <button 
          onClick={handleClick}
          className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:from-violet-500 hover:to-purple-500 hover:shadow-lg hover:shadow-violet-500/50 transform hover:scale-105 transition-all duration-300"
        >
          Click me
        </button>
      </div>
    </div>
  )
}

export default App