import React, { useEffect } from 'react'
const Dropdown = (props) => {
    const dropdownRef=useRef()
handleClick=(event)=>{
if(dropdownRef&&!dropdownRef.current.containes(event.target))
props.onClose?props.onClose():""
}
useEffect(()=>{
document.addEventListener('clcik',handleClick)//JAB COMPONENT MOUNT HO GAA
return()=>{//JAB COMPOENNT UNMOUNT HO GAA TAB YAA CHLAA GAA
    document.removeEventListener('clcik')
}
})
  return (
    <div ref={dropdownRef} className='dropdown'
    style={{
        position:"absolute",
        top:"100%",
        right:"0",
    }}
    >
    {props.children}
    </div>
  )
}

export default Dropdown