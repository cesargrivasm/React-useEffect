import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [cont, setCont]= useState(0);

  useEffect(()=>{
   setCont(cont + 1);
   return ()=>{
    console.log('desmontando el componente unMount component!!');
   }
  },[])

  return (
    <div>
      <h2>Use Effect Component</h2>
      {cont}

    </div>
  )
}

export default UseEffect
