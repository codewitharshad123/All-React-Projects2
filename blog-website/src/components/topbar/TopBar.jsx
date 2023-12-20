import React from 'react'
import {Link} from "react-router-dom"
import "./topbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
function TopBar() {
  const user=false
  return (
    <div className="top">
    <div className="topLeft">
   <FacebookIcon className="topIcon"/>
   <TwitterIcon className="topIcon"/>
   <PinterestIcon className="topIcon"/>
   <InstagramIcon className="topIcon"/>
    </div>
    <div className="topCenter">
        <ul className="topList">
<li className="topListItem"><Link className="link" to="/register">Home</Link></li>
<li className="topListItem"><Link className="link" to="/setting">About</Link></li>
<li className="topListItem"><Link className="link" to="/post">Contact</Link></li>
<li className="topListItem"><Link className="link" to="/write">Write</Link></li>
<li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
    </div>
    <div className="topRight">
    {
       user ? (
        <img  className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""></img>
       ):(
        <ul className="topList">
        <li className="topListItem">
        <Link className="link" to="/login">Login</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/register">Register</Link>
        </li>
        </ul>
       )
    }
<SearchIcon className="topSearchIcon"/>
    </div>
    </div>
  )
}
export default TopBar
