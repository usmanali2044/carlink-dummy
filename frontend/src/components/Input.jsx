import React from 'react'

const Input = ({icon:Icon,...props}) => {
  return (
    <div className='relative mb-6'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 
        pointer-events-none'>
             <Icon className="w-5 h-5 text-green-500"/>
        </div>
       <input {...props}  
       className='w-full pl-10 py-2 pr-3 bg-gray-800 rounded-lg border border-gray-700
       text-white placeholder-gray-400' />
    </div>
  )
}

export default Input