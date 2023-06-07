import React from 'react';

function Quizzes() {
  return (
    <div className='flex justify-center'>
        <div className='w-[1250px] h-[75vh] bg-white'>
          <div className='p-12'>
            <h1 className='font-bold text-2xl my-4 text-purple-600'>Select the correct answers from below...</h1>
            <h3 className='font-bold text-xl py-4 mt-4'>Q. What is your name?</h3>
            <div className='grid grid-cols-2 grid-row-2 gap-x-24 gap-y-12 p-10'>
                <div className='h-[50px] border w-[450px] text-center'>
                  A
                </div>
                <div className='h-[50px] border w-[450px] text-center'>
                  B
                </div>
                <div className='h-[50px] border w-[450px] text-center'>
                  C
                </div>
                <div className='h-[50px] border w-[450px] text-center'>
                  D
                </div>
            </div>
            <div className='flex justify-end align-middle p-8'>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Quit</button>
              <button type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Icon description</span>
              </button>
            </div>            
          </div>
        </div>
    </div>
  )
}

export default Quizzes