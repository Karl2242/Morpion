import React from 'react'

export default function Square({ value }) {

  function handleClick(){
    console.log('bien clique')
  }


  return (
   <>
        <button className="square" onClick={handleClick}>{ value }</button>

   </>
  )
}



