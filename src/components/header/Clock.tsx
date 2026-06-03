import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }))
    updateTime()
    const id = setInterval(updateTime, 1000)
    return () => clearInterval(id)
  }, [])

  return <span>{time}</span>
}
