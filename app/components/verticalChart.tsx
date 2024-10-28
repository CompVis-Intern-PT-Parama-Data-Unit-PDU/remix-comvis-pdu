"use client"

import { useState, useEffect, useRef } from 'react'
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function VerticalChart() {
  const [data, setData] = useState<{ time: string; value: number }[]>([])
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const newDataPoint = {
        time: now.toLocaleTimeString(),
        value: Math.random() * 100
      }
      setData(prevData => [...prevData.slice(-19), newDataPoint])

      // Auto-scroll to the bottom
      if (chartRef.current) {
        chartRef.current.scrollTop = chartRef.current.scrollHeight
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Vertical Chart</h2>
      <div ref={chartRef} className="h-[400px]">
        <ResponsiveContainer width="100%" height={data.length * 30}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="time" type="category" reversed={true} width={100} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}