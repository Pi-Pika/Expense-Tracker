import { PiggyBank } from 'lucide-react'
import React from 'react'

function Cardinfo(budgetList) {
  return (
    <div className='mt-7'>
        <div className='p-7' border rounded-lg>
        <div>
            <h2 className='text-sm'>Total Budget</h2>
            <h2 className='font-bold text-2xl'>15000 BDT</h2>
        </div>
        <PiggyBank className='bg-primary p-3 h-12 w-12 rounded-full text-white'/>
        </div>
        <div className='p-7' border rounded-lg>
        <div>
            <h2 className='text-sm'>Total Budget</h2>
            <h2 className='font-bold text-2xl'>15000 BDT</h2>
        </div>
        <PiggyBank className='bg-primary p-3 h-12 w-12 rounded-full text-white'/>
        </div>
        <div className='p-7' border rounded-lg>
        <div>
            <h2 className='text-sm'>Total Budget</h2>
            <h2 className='font-bold text-2xl'>15000 BDT</h2>
        </div>
        <PiggyBank className='bg-primary p-3 h-12 w-12 rounded-full text-white'/>
        </div>
    </div>
  )
}

export default Cardinfo