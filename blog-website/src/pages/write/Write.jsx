import React from "react"
import AddIcon from '@mui/icons-material/Add';
import "./write.css"
function Write(){
    return(
        <div className="write">
<img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
<form  className="writeForm">
<div className="writeFormGroup">
<label htmlFor="fileInput">
<AddIcon className="writeIcon"/>
</label>
<input type="file"  id="fileInput" style={{display:"none"}}/>
<input type="text" placeholder="THIS IS WRITE FORM IS" className="writeInput" autoFocus={true}/>
</div>
<div className="writeFormGroup">
<textarea placeholder="tell your stroy" type="text" className="writeInput writeText"></textarea>
</div>
<button className="writeSubmit">Publish</button>
</form>
        </div>
    )
}
export default Write