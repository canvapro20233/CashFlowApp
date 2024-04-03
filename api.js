import axios from "axios";


export function  getBudgetAPI(){
     return axios.get("http://192.168.103.253:3000/Budget/")
}

export function EditAPI(dt){
     return axios.put(`http://192.168.103.253:3000/Budget/${dt.id}`,dt)
}



