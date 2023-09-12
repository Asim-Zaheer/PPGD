import { useState ,useEffect } from "react";
import "./App.css";

function App() {
  const [data,setData]=useState([])
  const url ="https://jsonplaceholder.typicode.com/comments"
  useEffect(()=>{
    fetch(url).
    then((response)=>response.json()).then((json)=>{
      console.log(json ,"asasasasa")
      setData(json)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const postapi=()=>{
    const data={
      name:"asim",
      num:"1"
    }
    const url ="https://jsonplaceholder.typicode.com/comments"
    post(url,{
      method:"POST",
      body:JSON.stringify(data)
    })
    .then((res)=>{
      console.log(res ,"post")
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const putapi=()=>{
    const data={
      name:"zaheer",
      num:"2"
    }
    const url ="https://jsonplaceholder.typicode.com/comments"
    put(url,{
      method:"PUT",
      body:JSON.stringify(data)
    })
    .then((res)=>{
      console.log(res ,"post")
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  const delapi=()=>{
    const data={
      name:"zaheer",
      num:"2"
    }
    const url ="https://jsonplaceholder.typicode.com/comments"
    delete(url,{
      method:"DELETE",
      body:JSON.stringify(data)
    })
    .then((res)=>{
      console.log(res ,"post")
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    {data.map((x)=>{
      return(
      <>
        <div>{x.name}</div>
       <postapi/>
       <putapi/>
       <delapi/>
</>
      )
      

    })}
    {/* <button onClick={postapi} > submit</button> */}
    </>
  )
}

export default App;

