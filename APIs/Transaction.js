import React from 'react'
import axios from 'axios'

const Transaction = () => {
  return (
    axios.get("http://172.20.10.6:3000/Transaction")
  )
}
export default Transaction


export const TransactionEdit=(obj)=>{
  return (
    axios.put(`http://172.20.10.6:3000/Transaction/${obj.id}`,obj)
  )
}
export const TransactionAdd=(obj)=>{
  return (
    axios.post(`http://172.20.10.6:3000/Transaction`,obj)
  )
}

export const TransactionDelete=(id)=>{
  return (
    axios.delete(`http://172.20.10.6:3000/Transaction/${id}`)
  )
}
export const addUserAPI=(data)=>{
  return(
    axios.post("http://172.20.10.6:3000/users",data)
  )
}

export function loginAPI() {
  return axios.get("http://172.20.10.6:3000/users");
}

export function resetpass(data) {
    
  return axios.put(`http://172.20.10.6:3000/users/${data.id}`,data);
}

export const BankApi = () => {
  return (
    axios.get("http://172.20.10.6:3000/Accounts")
  )
}

export const GetBudget = (a) => {
  const response = axios.get(`http://172.20.10.6:3000/Budget/${a}`);
}

export const AddBudget = (dt)=>{
  const response = axios.post("http://172.20.10.6:3000/Budget",dt);
}

export const UpdateBudget = (dt)=>{
  const response = axios.put(`http://172.20.10.6:3000/Budget/${dt.id}`,dt);
}

export const DeleteBudget = (dt)=>{
  const response = axios.delete(`http://172.20.10.6:3000/Budget/${id}`);
}