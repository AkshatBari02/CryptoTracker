import React from 'react'
import './button.css';

const Button = ({text,onClick,outlined}) => {
    // const handleClick = (event) => {
    //     event.preventDefault();
    //     onClick();
    //   };
  return (
    <div className={outlined ? "outlined-btn" : "btn"} onClick={onClick}>{text}</div>
  )
}

export default Button