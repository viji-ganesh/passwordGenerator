  
 import { useState } from 'react'
  import React from 'react'
  import './App.css' 
  const App = () => {
     const [length, setLength] = useState(8);
     const [uppercase, setUppercase] = useState(true);
     const [lowercase, setLowercase] = useState(true);
     const [number, setNumber]= useState(true);
     const [symbol, setSymbol] = useState(true);
     const [password, setpassword] = useState("");


     const generatePassword = ()=>{
      let charset = ""
      if(uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(lowercase) charset += "abcdefghijklmnopqrstuvwxyz"
      if(number)  charset += "0123456789"
      if(symbol) charset += "!@#$%^&*()-_=+"

      let getpassword = "";
      for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        getpassword += charset[randomIndex];
   
      }
      setpassword(getpassword);
     }
      const copyToClipboard = ()=>{
        navigator.clipboard.writeText(password);
        alert("password copied")
      }

    
    return (
      <div className='password-generator'>
        <h2>Strong Password Generator</h2>
        <div className='input-group'>
          <label htmlFor="num">password Length:</label>
          <input type="number" id='num' value={length} 
          onChange={(e)=>setLength(e.target.value)}/>
        </div>
        <div className='checkbox-group'>
          <input type="checkbox"  id='upper' checked={uppercase}
          onChange={(e)=>setUppercase(e.target.checked)}/>

          <label htmlFor="upper">Include Uppercase</label>
        </div>

        <div className='checkbox-group'>
          <input type="checkbox"  id='lower' checked={lowercase}
          onChange={(e)=>setLowercase(e.target.checked)}/>

          <label htmlFor="lower">Include Lowercase</label>
        </div>

        <div className='checkbox-group'>
          <input type="checkbox"  id='numbers' checked={number}
          onChange={(e)=>setNumber(e.target.checked)}/>

          <label htmlFor="numbers">Include Number</label>
        </div>

        <div className='checkbox-group'>
          <input type="checkbox"  id='symbol' checked={symbol}
          onChange={(e)=>setSymbol(e.target.checked)}/>

          <label htmlFor="symbol">Include Symbol</label>
        </div>
        <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
        <div className='generate-password'>
          <input type="text" readOnly  value={password} />
          <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
        </div>


      </div>
    )
  }
  
  export default App
