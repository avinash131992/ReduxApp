
import axios from "axios";

export const getData = async()=>{
    let res = await axios.get('https://fakestoreapi.com/products');
    return res.data
}

export const removeData = async(id)=>{
    let res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
    return res.data
}