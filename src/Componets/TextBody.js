import React, { useState } from 'react'

function TextBody() {
    const[text, setText] = useState('')

    const valueOnChange =(index)=> {
        setText(index.target.value) 
    }

    const changeToUpper = ()=>{
        setText(text.toUpperCase())
    }    
    const changeToLower = ()=> {
        setText(text.toLowerCase())
    }

    const speak = ()=> {
        let msg = new SpeechSynthesisUtterance()
        msg.text = text
        window.speechSynthesis.speak(msg)
    }
    
  return (
    <section className='text-center my-8 flex flex-col  sm:w-[60vw] mx-auto px-2'>
    <h1 className='text-left ml-1 text-xl mb-3 font-medium m-2'>Analyse your text here  </h1>

    <textarea name="text" id="text" value={text} cols="100"  rows="10" className='border-black active:border-black  border-2 rounded-lg p-1' onChange={valueOnChange}></textarea>

    <div className='flex'>
    <button className="btn text-left bg-blue-500  flex items-center justify-center text-white mt-3 p-1 rounded-2xl text-sm cursor-pointer w-24 m-1" onClick={changeToUpper}>Upper Case</button>

    <button className="btn text-left bg-blue-500  flex items-center justify-center text-white mt-3 p-1 rounded-2xl text-sm cursor-pointer w-24 m-1" onClick={changeToLower}>Lower Case</button>

    <button className="btn text-left bg-blue-500  flex items-center justify-center text-white mt-3 p-1 rounded-2xl text-sm cursor-pointer w-24 m-1" onClick={speak}>Speak</button>
    </div>

    </section>
  )
}

export default TextBody;