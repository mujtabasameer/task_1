import React from "react";
import './Button.css'

interface ButtonProps 
{
    text:string;
    className?:string;
}

function Button(ButtonProps:ButtonProps) 
{
    return (
        <button className={`button ${ButtonProps.className}`}>
            {ButtonProps.text}
        </button>
    );
}

export default Button;

