import React from 'react'
import axios from 'axios'

const Transaction = () => {
  return (
    axios.get("http://192.168.0.103:3000/Transaction")
  )
}

export default Transaction
