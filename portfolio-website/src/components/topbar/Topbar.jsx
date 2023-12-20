import React from 'react'
import "./topbar.css"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
function Topbar(){
  return (
    <div className='topbar'>
<div className="wraper">
<div className="left">
<a href='#intro' className='logo'>genius.</a>
<div className='itemContainer'>
<PersonIcon className="icon"/>
<span>+92 302 60 45 904</span>
</div>
<div className='itemContainer'>
<MailIcon  className="icon"/>
<span>arshadmanzoor00666@gmail.com</span>
</div>
</div>
<div className="right">
    <div className="hamburger">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
    </div>
</div>
</div>
    </div>
  )
}

export default Topbar