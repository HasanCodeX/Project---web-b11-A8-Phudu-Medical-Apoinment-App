import React, { useEffect, useState } from "react";
import Blog from "./Blog";


function Blogs() {
  const [data,setData]=useState([])
  useEffect(()=>{
    const getData=async ()=>{
      try {
        const res=await fetch('/blog.json')
        if (!res.ok) throw new Error("response not found");
        const items=await res.json()
        setData(items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  },[])
  return (
    <>
          <div className="bg-gray-200 rounded-3xl border m-8"><h3 className="text-4xl mt-20 text-center font-extrabold">Blogs</h3>
          <p className="mx-auto text-center my-8">
            Let's explore some basic concept that will make you a good developer
          </p></div>
     <div>
      {data.map((item,index)=><Blog key={index} item={item}/>)}
     </div>
        
      
    </>
  );
}

export default Blogs;
