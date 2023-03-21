import React from 'react';

export default function App(){
  return( 
  <div>
    <Cabecalho/>
    <Texto/>
    <Cabecalho/>

  </div>
 )
}

export function Cabecalho(){
  return (
    <div style={{
      backgroundColor:'black',
      height:'8vh',

    }}
    >

    </div>
  )
}

export function Texto(){
  return(
    <div 
    style={{
      paddingButton:'5vh',
      paddingTop:'5vh',
      backgroundColor:'gray'
    }}>
      <h1 style={{textAlign:'center', backgroundColor:'gray' }}>sla</h1>
    </div>
  )
}
