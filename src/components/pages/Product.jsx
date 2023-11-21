import React, { useEffect } from 'react'
import { getData } from '../../API/api';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/productSlice/ProductSlice';
import { addtocart } from '../../store/cartSlice/cartSlice';

export default function Product() {
 const dispatch = useDispatch();
 const product =  useSelector((state)=> state.product.data);

const addtocartfun = (id)=>{
  let _copy = product.filter((data)=>{
      return data.id === id
  });
  dispatch(addtocart(..._copy))
}




useEffect(()=>{
  (async ()=>{
    const res = await getData();
    dispatch(add(res))
  })()

  // IIFE

},[])


  return (
    <>
      <div className="grid grid-cols-4  gap-4 px-12 py-5">
        {product?.map((ele,i)=>{
          return(
            <div className=" rounded overflow-hidden shadow-lg mb-5" key={i}>
            <img className="w-full" src={ele.image} style={{width: "150px", height:"150px", margin:"auto"}} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ele.title?.slice(0,20)}</div>
              <p className="text-gray-700 text-base">
               {ele.description?.slice(0,30)} 
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span onClick={()=>{addtocartfun(ele.id)}} className="inline-block bg-blue-600 text-white rounded-full px-4 cursor-pointer py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Add to Cart</span>
            </div>
          </div>
          )
        })}
       
      </div>
    </>
  )
}
