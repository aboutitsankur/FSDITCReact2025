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

function addtocart(ele){
  alert(ele.title);
}

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {
        data.length == 0?(
          <h2>Data not found</h2>
        ):(
          <div style={{display:'flex', justifyContent:'space-between'}}>
            {
              data.map((ele)=>(
                <div style={{border:'2px solid blue'}}>
                  <img src={ele.image} height={100} width={100} />
                  <h1>{ele.title}</h1>
                  <h3>{ele.description}</h3>
                  <h3>{ele.price}</h3>
                  <button onClick={()=>addtocart(ele)}>Add to Cart</button>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Dashboard
