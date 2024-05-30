import { useState } from 'react'
import './App.css'
import { FaPaw } from "react-icons/fa";
import { BsEmojiTear } from "react-icons/bs";

function App() {

  const[dog,setDog]=useState("")
  const[cat,setCat]=useState("")

const handleDogClick=()=>{
  fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(res=>res.json())
  .then(data=>{
    setDog(data.message);
  })
}

const handleCatClick=()=>{
  fetch(`https://api.thecatapi.com/v1/images/search`)
  .then(res=>res.json())
  .then(data=>{
    setCat(data[0].url);
  })
}
 
  return (
    <>
    <h1>Feeling low <BsEmojiTear /> ?..Let's cheer you up instantly</h1>
    <div className='wrapper'>
      <div>
        <button onClick={handleDogClick}>Dogs?</button>
        {dog && <img src={dog}/>}
      </div>
      <div>
        <button onClick={handleCatClick}>Cats?</button>
        {cat && <img src={cat}/>}
      </div>
    </div> 
    </>
  )
}

export default App
