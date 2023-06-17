import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({dataForQuiz}) => {
    const navigate = useNavigate();
    const { logo, name, total } = dataForQuiz;

    const handleEvent = () => {
        navigate('/quizzes', { state: dataForQuiz });      
    }

    return (
        <div className='bg-gradient-to-bl from-red-700 to-cyan-600 text-white w-[16rem] h-[20rem] rounded-md shadow-inner hover:shadow-xl hover:scale-105 duration-300'>
            <div className='flex flex-col justify-around items-center p-8'>
                <div className='w-12 h-12 border rounded mb-5 bg-transparent'>
                    <img src={logo} alt="" />
                </div>
                <h1 className='font-bold text-2xl my-4'>
                    {name}
                </h1>
                <p className='text-lg mt-2 text-[#ffffff] mb-2'>
                    {total} questions to tackle!
                </p>
                <button onClick={handleEvent} className='bg-[#dbdada] text-black font-bold py-2 mx-auto w-[70%] rounded-md mt-9'>
                    Start
                </button>
            </div>
        </div>
    );
};

export default QuizCard;