import React, { useState } from "react";


export function SwitchTheme(){

  const [theme, setTheme] = useState("light")
  const [btnColor, setBtnColor] = useState("black")

  const changeTheme = (e)=>{
    setTheme((prev=>{
      if(prev == "light"){
        document.body.style.backgroundColor = "black";
        setBtnColor("white")
        setTheme("dark");
      }else{
        setTheme("light");
        setBtnColor("black")
        document.body.style.backgroundColor = "white";
      }
    }))
  };

  return  <button onClick={changeTheme} style={{backgroundColor: btnColor}}> toggle theme</button>
}