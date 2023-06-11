import React from 'react';

const Results = () => {
  let score = 4;
  return (
    <div className='flex justify-center text-center'>
      <div className='w-[1250px] h-[75vh] bg-[#1e1f32] mt-2 p-12'>
        <div className='h-[100%] bg-[#0D0F3B] p-2 text-cyan-50'>
          <div className='mx-auto py-4'>
            <h1 className='mt-4'>
              <b className='text-2xl text-red-800'>Congratulations</b>, 
              you have completed the quiz and {score > 5 ? 'a master': 'almost a master'} of JS.
            </h1>
          </div>
          <div className='mx-auto py-20'>
            <h2>
              You have correctly answered 5 questions out of 11! <br />& achieved
            </h2>
            <p className='mt-8 text-xl'>
              <b className='text-3xl'>94</b> percentile.
            </p>
          </div>
          <div>
            <h2>
              Wanna give it another try?
            </h2>
            <button className='bg-[#5e057c] text-white py-2 mx-auto w-[20%] rounded-md mt-9'>
              Go back to home!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;