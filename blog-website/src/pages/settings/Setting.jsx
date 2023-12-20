import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
function Setting(){
    return(
        <div className="settings">
<div className="settingWrapper">
    <div className="settingsTitles">
        <span className="settingsUpdateTitles">UPDATE YOUR ACCOUNT</span>
        <span className="settingsDeleteTitles">DELETE YOUR ACCOUNT</span>
    </div>
    <form  className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
        <label htmlFor="fileInput">
<AccountCircleIcon className="settingsPPIcon"/>
        </label>
<input type="file" id="fileInput" style={{display:"none"}}/>
        </div>
<label>UserName</label>
<input type="text" placeholder="THIS IS ONE IS"/>
<label>Email</label>
<input type="text" placeholder="arshad@gmail.com"/>
<label>password</label>
<input type="password"/>
<button className="settingSubmit">Update</button>
    </form>
</div>
<Sidebar/>
        </div>
    )
}
export default Setting