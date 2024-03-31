import React from 'react'
import axios from 'axios'

const Transaction = () => {
  return (
    axios.get("http://192.168.0.103:3000/Transaction")
  )
}

export default Transaction


export const addUserAPI=(data)=>{
  return(
    axios.post("http://192.168.0.103:3000/users",data)
  )
}

export function loginAPI() {
  return axios.get("http://192.168.0.103:3000/users");
}

export function resetpass(data) {
    
  return axios.put(`http://192.168.0.103:3000/users/${data.id}`,data);
}