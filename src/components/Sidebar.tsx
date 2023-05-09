import TwitterLogo from '../assets/logo-twitter.svg'
import './Sidebar.css'
import { Bell, BookmarkSimple, Envelope, FileText, Hash, House, User, DotsThreeCircle, Sparkle, Pencil } from 'phosphor-react'
import { NavLink } from 'react-router-dom';


export function Sidebar(){
  return(
    <aside className='sidebar'>
        <img src={TwitterLogo} alt="Logo" className='logo' />

        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill'/>
            <span>Home</span>
          </NavLink>
          <a href="#">
            <Hash/>
            <span>Explore</span>
          </a>
          <a href="#">
            <Bell/>
            <span>Notifications</span>
          </a>
          <a href="#">
            <Envelope/>
            <span>Messages</span>
          </a>
          <a href="#">
            <BookmarkSimple/>
            <span>Bookmarks</span>
          </a>
          <a href="#">
            <FileText/>
            <span>List</span>
          </a>
          <a href="#">
            <User/>
            <span>Profile</span>
          </a>
          <a href="#">
            <DotsThreeCircle/>
            <span>More</span>
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Twet</span>
        </button>
      </aside>
  )
}