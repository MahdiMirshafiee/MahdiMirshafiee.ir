// components/Terminal.tsx
'use client'
import React, { useState, useEffect } from 'react'

interface TerminalProps {
  name: string
  title: string
  location: string
  status: string
  quote: string
}

const Terminal: React.FC<TerminalProps> = ({
  name,
  title,
  location,
  status,
  quote,
}) => {
  const [typedCommand, setTypedCommand] = useState('')
  const [typedDetails, setTypedDetails] = useState('')
  const [showPrompt, setShowPrompt] = useState(false)

  const commandToDisplay = 'whoami'
  const detailsToDisplay = `Name: ${name}\nTitle: ${title}\nLocation: ${location}\nStatus: ${status}\nFavorite quote: ${quote}`

  // Effect for typing the command
  useEffect(() => {
    let currentIndex = 0
    const commandInterval = setInterval(() => {
      if (currentIndex < commandToDisplay.length) {
        setTypedCommand(commandToDisplay.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(commandInterval)
        setShowPrompt(true)
      }
    }, 100)

    return () => clearInterval(commandInterval)
  }, [])

  // Effect for typing the details
  useEffect(() => {
    if (!showPrompt) return

    let currentIndex = 0
    const detailsInterval = setInterval(() => {
      if (currentIndex < detailsToDisplay.length) {
        const charToShow = detailsToDisplay[currentIndex]
        setTypedDetails(
          (prev) => prev + (charToShow === '\n' ? '\n' : charToShow)
        )
        currentIndex++
      } else {
        clearInterval(detailsInterval)
      }
    }, 100) // Typing speed for details

    return () => clearInterval(detailsInterval)
  }, [showPrompt, detailsToDisplay])

  return (
    <div className="flex min-h-70 w-[82vw] flex-col justify-start rounded-lg bg-gray-300 p-6 font-mono text-sm shadow-[5px_5px_rgba(100,116,139,0.4),10px_10px_rgba(100,116,139,0.3),15px_15px_rgba(100,116,139,0.2),20px_20px_rgba(100,116,139,0.1),25px_25px_rgba(100,116,139,0.05)] min-[450px]:w-full min-[768px]:w-160 min-[1300px]:w-80 md:mb-10 dark:bg-stone-800">
      {' '}
      {/* Prompt line */}
      <div className="mb-4 flex items-center">
        <span className="mr-2 text-mist-900 dark:text-slate-400">MIR~$</span>
        <span className="text-mist-500">{typedCommand}</span>
      </div>
      {/* Details section - typed */}
      {typedDetails && (
        <div className="mt-4 space-y-1">
          {typedDetails.split('\n').map((line, index) => (
            <div key={index}>
              {line.includes(':') ? (
                <>
                  <span className="text-mist-900 dark:text-slate-400">
                    {line.split(':')[0]}:{' '}
                  </span>
                  <span className="text-mist-500">
                    {line.split(':')[1].trim()}
                  </span>
                </>
              ) : (
                <span className="text-white">{line}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Terminal
