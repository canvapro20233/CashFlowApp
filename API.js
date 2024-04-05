import axios from "axios";

export function addUserAPI(data) {
    return axios.post("http://192.168.93.38:3000/users",data);
}

export function loginAPI() {
    return axios.get("http://192.168.93.38:3000/users");
}

export function resetpass(data) {
    return axios.put(`http://192.168.93.38:3000/users/${data.id}`,data);
}