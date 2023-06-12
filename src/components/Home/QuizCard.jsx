import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({dataForQuiz}) => {
    const navigate = useNavigate();

    const handleEvent = () => {
        navigate('/quizzes', { state: dataForQuiz });      
    }

    return (
        <div className='bg-white w-[16rem] h-[20rem] rounded-md shadow-inner hover:shadow-xl hover:scale-105 duration-300'>
            <div className='flex flex-col justify-around items-center p-8'>
                <div className='w-12 h-12 border rounded mb-5'>
                    <img src={dataForQuiz?.logo} alt="" />
                </div>
                <h1 className='font-bold text-2xl my-4'>
                    {dataForQuiz?.name}
                </h1>
                <p className='text-md mt-2 text-lime-700 mb-2'>
                    {dataForQuiz?.total} questions to tackle!
                </p>
                <button onClick={handleEvent} className='bg-[#5e057c] text-white py-2 mx-auto w-[70%] rounded-md mt-9'>
                    Start
                </button>
            </div>
        </div>
    );
};

export default QuizCard;