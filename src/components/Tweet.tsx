import { ArrowClockwise, ChatCircle } from 'phosphor-react'
import { Link } from 'react-router-dom';
import './Tweet.css'


interface TweetProps{
  content: string;
}

export default function Tweet(props: TweetProps) {
  return(
    <Link to='/status' className="tweet">
      <img src='https://github.com/dopeeycode.png' alt="Italo patricio" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Dopeey</strong>
          <span>@dopeeyxs</span>
          </div>
          <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle />
            20
          </button>
          <button type='button'>
            <ArrowClockwise/>
            20
          </button>
        </div>
      </div>
    </Link>
  )
}