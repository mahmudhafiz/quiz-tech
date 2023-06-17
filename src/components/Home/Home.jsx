import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

function Home() {
  const quizzes = useLoaderData();

  useEffect(() => {
    document.title = 'Tech Quiz';
  }, []);

  const dataForQuizzes = quizzes?.status ? quizzes?.data:[];
  return (
    <div>
        <div className='max-w-[1250px] w-full flex flex-col justify-between align-middle my-2 p-2 mx-auto text-center mb-2'>
            <h3 className='text-4xl font-bold max-w-[650px] mx-auto text-[#000d5f]'>
                Take the quiz and master the technology which you hate!
            </h3>
            <p className='max-w-[800px] my-10 mx-auto p-3 text-black text-lg font-bold'>
            A quiz refers to a short test of knowledge, typically around 10 questions 
            in length, with question formats often including multiple choice, fill in the 
            blanks, true or false and short answer. Professors who employ quizzes 
            in their courses—a practice which is increasingly viable thanks to the broader use of 
            technology in higher ed—may schedule them in each class 
            to ensure students have retained knowledge from the previous lesson. 
            </p>
            {
              <div className='grid grid-cols-4 gap-4'>
                {
                  dataForQuizzes.map(dataForQuiz => 
                      <QuizCard dataForQuiz={dataForQuiz?.data}
                      >
                      </QuizCard>
                  )
                } 
              </div>
            }
        </div>
    </div>
  )
}

export default Home