import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Results = () => {
  const resultData = useOutletContext();
  const navigate = useNavigate();
  const { greenAns, totalQ, nameQuiz } = resultData;
  const score = (greenAns / totalQ) * 100;
  let text;

  if (score >= 80) {
    text = 'and a master';
  }
  else if (score >= 60) {
    text = 'and almost a master';
  }
  else if (score >= 35) {
    text = 'but soon to be a master';
  }
  else {
    text = 'but a noob';
  }

  const backHome = () => {
    navigate('/home');
  };

  return (
    <div className='flex justify-center text-center'>
      <div className='w-[1250px] h-[75vh] bg-[#9703a1] mt-2 p-12'>
        <div className='h-[100%] bg-[#0d005f] p-2 text-cyan-50'>
          <div className='mx-auto py-4'>
            <h1 className='mt-4'>
              <b className='text-2xl text-red-800'>Congratulations</b>, 
              you have completed the quiz {text} of {nameQuiz}.
            </h1>
          </div>
          <div className='mx-auto py-20'>
            <h2>
              You have correctly answered <b className='text-2xl'>{greenAns}</b> questions out of <b className='text-2xl'>{totalQ}</b>. <br />& achieved
            </h2>
            <p className='mt-8 text-xl'>
              <b className='text-3xl'>{Math.ceil(score)}</b> percentile.
            </p>
          </div>
          <div>
            <h2>
              Wanna give it another try?
            </h2>
            <button onClick={backHome} className='bg-[#6c1a06] text-white py-2 mx-auto w-[15%] rounded-md mt-9'>
              Go back!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;