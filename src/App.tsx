import { useState } from 'react'
import { useEffect } from 'react';
//apis
//https://dog-api.kinduff.com/api/facts?number=1

//https://dog.ceo/api/breeds/image/random


function App() {
  const [img, setIMG] = useState("");
  //debugger
  useEffect(  () => {
   
    async function getData() {
      let result=await fetch("https://dog.ceo/api/breeds/image/random");
      let data=await result.json();
      //console.log(data.message)
      
          setIMG(data.message)
    
    
    }
  
    getData();
      
       
    },[]);
  return (
    <img src={img} alt="dogy" width="500" height="600"></img>
  )
}

export default App
