import { FormEvent, KeyboardEvent, useState } from "react";
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"

import './Timeline.css';

export default function Timeline() {

  const [tweets, setTweets] = useState([
    {
      id: 1,
      content: 'Meu primeiro tweet'
    }
  ])

  return(
    <main className='timeline'>
    <Header title='Home'/>
    
     <form className='new-tweet-form'>
       <label htmlFor="tweet">
         <img src='https://github.com/dopeeycode.png' alt="" />
         <textarea
          id="tweet" 
          placeholder="What's happening?"
          />
       </label>
       <button type='submit'>Tweet</button>
     </form>
     <Separator />
     {tweets.map(tweet => {
       return <Tweet key={tweet.id} content={tweet.content}/>
     })}
   </main>
  )
}