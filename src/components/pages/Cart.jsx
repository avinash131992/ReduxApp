import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../API/api'
import { addtocart } from '../../store/cartSlice/cartSlice'
import { remove } from '../../store/cartSlice/cartSlice'

function Cart() {
const dispatch = useDispatch()
  const addtocartItems = useSelector((state) => state.cart.data)
//  const product =  useSelector((state)=> state.product.data);

  const deletecartitem = (id)=>{
   dispatch(remove(id)) 
  }

  // console.log(addtocartItems, 'cart comp')

  return (
    <div>
      <div className='px-12 py-4 border-b mb-4'>
        <h1 className="text-2xl font-bold">My Cart</h1>
      </div>
      <div className="grid grid-cols-2  gap-4 px-12 py-5">
        {addtocartItems?.map((ele, i) => (
          <div className=" rounded overflow-hidden shadow-lg mb-5" key={ele.id}>
            <div className="flex">
              <img className="w-full" src={ele.image} style={{ width: "150px", height: "150px" }} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ele.title}</div>
                <p className="text-gray-700 text-base">
                  {ele.description}
                </p>
              </div>
            </div>

            <div className="px-6 pt-4 pb-2">
              <span onClick={()=>deletecartitem(ele.id)} className="inline-block bg-blue-600 text-white rounded-full px-4 cursor-pointer py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">Remove</span>
            </div>
          </div>

        ))}


      </div>

    </div>
  )
}

export default Cart
