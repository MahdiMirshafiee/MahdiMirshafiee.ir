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
  }, [commandToDisplay, detailsToDisplay])

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
    <div className="flex min-h-75 w-[82vw] flex-col justify-start rounded-lg bg-gray-300 p-6 font-mono text-sm shadow-[5px_5px_rgba(100,116,139,0.4),10px_10px_rgba(100,116,139,0.3),15px_15px_rgba(100,116,139,0.2),20px_20px_rgba(100,116,139,0.1),25px_25px_rgba(100,116,139,0.05)] min-[450px]:w-full min-[768px]:w-160 min-[1300px]:w-80 md:mb-10 dark:bg-stone-800">
      <div className="flex items-center gap-2 rounded-t-lg border-b border-gray-400/30 pb-3 dark:border-zinc-700">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="mb-4 mt-3 flex items-center">
        <span className="mr-2 text-mist-500 dark:text-slate-400">MIR~$</span>
        <span className="text-mist-900 dark:text-neutral-200">
          {typedCommand}
        </span>
      </div>
      {typedDetails && (
        <div className="mt-4 space-y-1">
          {typedDetails.split('\n').map((line, index) => (
            <div key={index}>
              {line.includes(':') ? (
                <>
                  <span className="text-mist-500 dark:text-slate-400">
                    {line.split(':')[0]}:{' '}
                  </span>
                  <span className="text-mist-900 dark:text-neutral-200">
                    {line.split(':')[1].trim()}
                  </span>
                </>
              ) : (
                <span className="text-mist-900 dark:text-neutral-200">
                  {line}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Terminal
