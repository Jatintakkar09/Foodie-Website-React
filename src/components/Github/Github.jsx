import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  //   const [data,setData]=useState("")
  // useEffect(()=>{
  //  fetch("https://api.github.com/users/hiteshChoudhary")
  //  .then((response)=> response.json())
  //  .then((data)=> {
  //   console.log(data.followers)
  //   setData(data)
  //  }) 


  // },[])
 
  const data = useLoaderData()
  


  return (
    <div className='text-center bg-gray-500 text-white p-10'>
      Github Followers :{data.followers}
      <img src={data.avatar_url} alt="avatar" className="rounded-full mx-auto" />
    </div>
  )
}

export default Github


export const githubInfoLoader= async()=>{
  const response= await fetch("https://api.github.com/users/hiteshChoudhary")
  const data= await response.json()
  return data}