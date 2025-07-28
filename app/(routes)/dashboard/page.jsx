"use client"
import React from 'react'
import { UserButton } from '@clerk/nextjs'

function Dashboard() {
  const { user } = useUser();
  return (
    <div className='p-10'>
      <h2 className='font-bold text-3xl'>Hello, {user?.fullName} 🤘</h2>
      <p className='text-gray-700'>Are you spending your money wisely? 🤔 Let's manage your expenses! 😊</p>
    </div>
  )
}

export default Dashboard