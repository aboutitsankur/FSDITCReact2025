import React, { useEffect, useState } from 'react'

function Dashboard() {
  const [data,setData]=useState([]);
  // const[counter,setCounter]=useState(10);
  // const[pointer,setpointer]=useState(50);
  // useEffect(()=>{
  //   console.log(counter);
  //   console.log(pointer);
  // },[counter])

  useEffect(()=>{
    async function getData(){
      const response = await fetch ("https://fakestoreapi.com/products");
      const resdata= await response.json();
      setData(resdata);
      console.log(resdata);
    }
    getData();
  },[])
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default Dashboard
