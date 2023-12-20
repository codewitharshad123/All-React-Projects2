import React from "react"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./singlePost.css"
function SinglePost(){
    return(
        <div className="singlePost">
<div className="singlePostWrapper">
<img className="singlePostImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
<h1 className="singlePostTitle">It is a long established
<div className="singlePostEdit">
<EditIcon className="singlePostIcon"/>
<DeleteIcon className="singlePostIcon"/>
</div>
</h1>
<div className="singlePostInfo">
<span className="singlePostAuthor">Authors: <b>ARSHAD</b></span>
<span className="singlePostAuthor">1 Hour ago</span>
</div>
<p className="singlePostDesc">It is a long established fact that a reader will be distracted by the readable
 content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
It is a long established fact that a reader will be distracted by the readable content of a page
 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
  to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
   use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
   Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
   It is a long established fact that a reader will be distracted by the readable
 content of a page when looking at its layout. 
The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
It is a long established fact that a reader will be distracted by the readable content of a page
 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
  to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
   use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
   Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
</p>
</div>
        </div>
    )
}
export default SinglePost