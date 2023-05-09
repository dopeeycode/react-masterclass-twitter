import { PaperPlaneRight } from 'phosphor-react'
import { FormEvent, KeyboardEvent, useState } from 'react'
import Header from '../components/Header'
import Separator from '../components/Separator'
import Tweet from '../components/Tweet'
import './Status.css'


export default function Status(){

  const [answers, setAnswers] = useState([
    {
      id: 1,
      content: 'Concordo kkkkkk'
    }
  ])

  return(
    <main className='status'>
    <Header title='Tweet'/>
    <Tweet content="Programador sem café é a mesma coisa que poeta sem poesia"/>
    <Separator/>
     <form  className='answer-tweet-form'>
       <label htmlFor="tweet">
         <img src='https://github.com/dopeeycode.png' alt="" />
         <textarea
          id="tweet" 
          placeholder="Tweet your answer"
          />
       </label>
       <button
          type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
     </form>
     {answers.map(answer => {
       return <Tweet key={answer.id} content={answer.content}/>
     })}
   </main>
  )
}