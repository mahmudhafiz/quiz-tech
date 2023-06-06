import React, { useState } from 'react';

function Home() {
  const [quiz, setQuiz] = useState(false);

  return (
    <div>
        <div className='max-w-[1250px] w-full flex flex-col justify-between align-middle my-2 p-2 mx-auto text-center mb-2'>
            <h3 className='text-3xl font-bold max-w-[600px] mx-auto'>
                Take the quizzes and master the technology that you hate!
            </h3>
            <p className='max-w-[800px] mx-auto p-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Necessitatibus, iusto atque doloribus earum temporibus commodi!
                  Quasi doloremque a consequatur debitis?
            </p>
            <div className='max-w-[250px] mx-auto py-3'>
              <button onClick={() => setQuiz(!quiz)} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                { quiz ? 'Hide':'Show'}
              </button>
            </div>
            {
              quiz && 
              <div>
                Hello
              </div>
            }
        </div>
    </div>
  )
}

export default Home