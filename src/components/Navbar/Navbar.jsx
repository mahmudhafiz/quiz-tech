import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='flex justify-between items-center h-24 mx-auto max-w-[1240px] text-[#000d5f] font-bold'>
            <h1 className='w-full text-3xl font-bold'>Tech Quiz.</h1>
            <ul className='hidden md:flex text-xl'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Quizzes</li>
                <li className='p-4'>Results</li>
                <li className='p-4'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar