import React from 'react'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const user=useSelector((state)=>state.auth.user)
  return (
    <div>
      <h1>Hello ,{user?.firstName}</h1>
      Dashboard
    </div>
  )
}
