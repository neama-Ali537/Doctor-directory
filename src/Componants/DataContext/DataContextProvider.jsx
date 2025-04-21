import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const dataContext =createContext("");
export default function DataContextProvider(props) {
  const[data , setData ]= useState([])
 async function fetchData(){
  const response = await axios.get("https://mocki.io/v1/0c32ad32-5400-412e-8173-01c63b01eba1")
  setData(response.data)
  console.log(response.data);
  
 }
 useEffect(()=>{
  fetchData()
 },[])
  return <>
<dataContext.Provider value={{data}} >
{props.children}
</dataContext.Provider>
  </>
}
