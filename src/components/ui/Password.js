// import Label from './Label'
import React, { useState } from 'react';

const Password = (props) => {
    const [display, setDisplay] = useState("show");
    
    const passVisibilityHandler = () => {
        setDisplay(!display);
    };

    return (
        <div className = "relative w-full mb-4">
            <div className = "absolute inset-y-0 right-0 flex items-center px-2">
                <input className = "hidden" id="toggle" type="checkbox" />
                <label className = "text-gray-900 bg-gray-300 hover:bg-gray-900 hover:text-gray-300 dark:text-gray-300 dark:bg-gray-900 hover:dark:bg-gray-300 hover:dark:text-gray-900 rounded px-2 py-1 text-sm dark: font-mono cursor-pointer js-password-label" onClick = {passVisibilityHandler}>
                    { display ? "hide" : "show" }
                </label>
            </div>
            <input type = { display ? "text" : "password" } className = "outline-none focus:shadow-md border-2 rounded w-full py-2 px-2 leading-tight border-gray-300 dark:border-gray-600 bg-gray-100 focus:outline-none focus:bg-white text-gray-700 pr-16 js-password duration-300 dark:bg-gray-700 dark:text-gray-200" id="password" placeholder = {props.placeholder} />
        </div>
    );
}

Password.defaultProps = {
    display: true,
    placeholder: "Enter Password",
};

export default Password