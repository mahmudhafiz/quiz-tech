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
            <h3 className='text-4xl font-bold max-w-[650px] mx-auto text-[#008195]'>
                Take the quiz and master the technology which you hate!
            </h3>
            <p className='max-w-[900px] my-10 mx-auto p-3 text-black text-lg font-bold'>
            Technology quizzes are an exciting way to test and expand knowledge in the e
            ver-evolving tech world. These quizzes cover a range of topics like programmi
            ng, version control, and etc. They encourage learning, problem-solving, and stayi
            ng updated on advancements. Quizzes are useful in academic and professional setti
            ngs for assessing knowledge and promoting growth. They can also be social activiti
            es, fostering collaboration and camaraderie. Technology quizzes offer an engaging p
            latform to challenge oneself, discover new interests, and connect with others who s
            hare a passion for technology. Embrace the adventure, test your tech expertise, 
            and explore the vast world of technology through quizzes!
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