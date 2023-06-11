import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function Quizzes() {
  const quizProps = useOutletContext();
  const navigate = useNavigate();
  const { questions, name } = quizProps;
  const [counter, setCounter] = useState(0);


  const nextQ = () => {
    setCounter(prevCount => prevCount + 1);
  };

  const quit = () => {
    navigate('/home');
  }

  useEffect(() => {
    document.title = `Tech Quiz :: ${name}`;
  }, [name, counter])

  console.log(quizProps);
  return (
    <div className='flex justify-center'>
        <div className='w-[1250px] h-[75vh] bg-white'>
          <div className='p-12'>
            <h1 className='font-bold text-2xl my-4 text-purple-600'>Select the correct answers from below...</h1>
            <h3 className='font-bold text-xl py-4 mt-4'>Q.{' '}
              {questions[counter]?.question.slice(3, -4)}
            </h3>
            <div className='grid grid-cols-2 grid-row-2 gap-x-24 gap-y-12 p-10'>
                <button className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 text-center hover:bg-gray-300'>
                    {questions[counter]?.options[0]}
                  </div>
                </button>
                <button className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 text-center hover:bg-gray-300'>
                    {questions[counter]?.options[1]}
                  </div>
                </button>
                <button className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 text-center hover:bg-gray-300'>
                    {questions[counter]?.options[2]}
                  </div>
                </button>
                <button className=''>
                  <div className='h-[80px] border-2 rounded-xl w-[500px] p-2 text-center hover:bg-gray-300'>
                    {questions[counter]?.options[3]}
                  </div>
                </button>
            </div>
            <div className='flex justify-between align-middle p-8'>
            <button type="button" onClick={quit} class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium 
              rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
               dark:focus:ring-red-900">Quit</button>
              <button type="button" onClick={nextQ} class="text-blue-700 border border-blue-700
                 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500
                dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                      </path></svg>
                  <span class="sr-only">Icon description</span>
              </button>
            </div>            
          </div>
        </div>
    </div>
  )
}

export default Quizzes