import React from 'react'
import './InputOption.css'
function InputOption({type,Icon, title,color,onClick}) {
  
    return (
      
        <div className="inputOption" > 
        {type}
        <Icon style={{color:color} } onClick={onClick}/>
          <h4>{title}</h4>  
        </div>
    )
}

export default InputOption
