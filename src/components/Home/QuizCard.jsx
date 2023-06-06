import React from 'react';

const QuizCard = ({dataForQuiz}) => {
    return (
        <div className='bg-white w-[16rem] h-[20rem] rounded-md shadow-xl hover:scale-105 duration-300'>
            <div className='flex flex-col justify-around items-center p-8'>
                <div className='w-12 h-12 border rounded mb-5'>
                    <img src={dataForQuiz?.logo} alt="" />
                </div>
                <h1 className='font-bold text-2xl my-4'>
                    {dataForQuiz?.name}
                </h1>
                <p className='text-md text-lime-700 mb-4'>
                    {dataForQuiz?.total} questions to tackle!
                </p>
                <button className='bg-[#af2b0d] text-white py-2 mx-auto w-[70%] rounded-md mt-7'>
                    Start
                </button>
            </div>
        </div>
    );
};

export default QuizCard;