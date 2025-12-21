import axios from "axios";

export const chatApi = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_CHAT,
    headers:{
        'Content-Type':'application/json', 
    }
})

export const chatApiStream = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_STREAM,
    headers:{
        'Content-Type':'application/json'
        
    }
})

export const sectionApi = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_SECTION,
    headers:{
        'Content-Type':'application/json'
    }
})