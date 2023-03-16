import React from "react";
import "./style.css";

function Home1()
{
    return "this is heading";
}
export default  Home1


export const About = ()=>{
    return(
        <p className="first">this is heading and name export functionBuilds the app for production to the build folder.
        It correctly bundles React in production mode and optimizes the build for the best performance.
        
        The build is minified and the filenames include the hashes.
        Your app is ready to be deployed!Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!</p>

    )
}

export const About10 = ()=>{
    const a = "50";
    return(
        <>
            <h1 style={{color:'red',backgroundColor:'green',marginLeft:`${a}px`}}>heading</h1>
        </>
    )
}
