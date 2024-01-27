'use client';
import {useState} from 'react'

export default function Home() {
  const [data, setData] = useState('')

  const handleClick = async (e) => {
    console.log(e)
    const response = await fetch('/api/leads', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: "abc123@gmail.com"})
    })
    setData(await response.json())
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <button onClick={handleClick} className="bg-green-400">Press Me</button>
      {data && JSON.stringify(data)}
    </main>
  );
}
