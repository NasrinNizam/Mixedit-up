import React, { useEffect, useState } from 'react'
import Products from '../ProductData'
export const ProductCompo = () => {
    const [data , setData] =useState(Products)
    const handleData =(allData)=>{
        const filterData = Products.filter((filterProducts)=>{
            return filterProducts.type == allData

        })
        setData(filterData)
        console.log(allData)
    }
    useEffect(()=>{
        let ImageCard = document.querySelectorAll('.ImageCard')
        ImageCard.forEach((item)=>{
            item.classList.remove('animation')
            void item.offsetWidth
            item.classList.add('animation')
        })
    } ,[data] )


  return (
    <>
    <div className="container">
        <div className="mt-5 mb-10 flex justify-end items-center gap-5">
             <button onClick={()=>setData(Products)} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">All</button>
             <button onClick={()=>handleData('SUV')} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">SUV</button>
             <button onClick={()=>handleData('Sedan')} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">Sedan</button>
             <button onClick={()=>handleData('Convertible')} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">Convertible</button>
             <button onClick={()=>handleData('Wagon')} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">Wagon</button>
             <button onClick={()=>handleData('Hatchback')} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">Hatchback</button>
             <button onClick={()=>handleData('Coupe')} className="py-2 px-5 bg-orange-200 text-black rounded-lg font-poppins font-medium transition-[.4s] hover:font-semibold hover:bg-slate-200">Coupe</button>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
           {
            data.map((item)=>(
                <div key={item.id} className="ImageCard w-[500px] h-[300px] overflow-hidden bg-white bg-center rounded-lg relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
                <div className="flex gap-10 mx-4 mt-5 mb-6">
                    <div className="w-[200px] h-[200px] bg-slate-100 flex justify-center items-center rounded-lg shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
                       <img className="w-[170px] h-[170px] rounded-3xl " src={item.photo} alt="photo" />
                    </div>
                <div className=" mt-2">
                    <div className=" ">
                        <h2 className="text-lg  font-poppins font-semibold ">Model : <span className="text-orange-500 ">{item.name}</span> </h2>
                        <h2 className="text-lg  font-poppins font-medium ">Brand : {item.brand} </h2>
                        <h2 className="text-lg  font-poppins font-medium ">Color : {item.color} </h2>
                        <h2 className="text-lg  font-poppins font-medium ">Type  : {item.type} </h2>

                    </div>
                {
                    item.discounted_price&&
                    <div className=" -rotate-45 text-white text-[16px] px-2 py-1 w-[130px] text-center bg-orange-500 bg-opacity-75 absolute top-[16px] left-[-30px] font-bold font-poppins ">Flash Sale</div>
                }
                </div>    
            </div>
            <div className=" border-b-[1px] border-b-black w-[320px] py-2 bg-slate-200 bg-opacity-50 rounded-md mx-auto flex justify-center gap-[25px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                    <h3 className="text-lg text-orange-400 font-poppins font-semibold "> Price :{item.discounted_price? item.discounted_price :item.price }$  <span className="ml-5 line-through text-black"> {item.discounted_price&& item.price} </span></h3>
                </div>
                </div>
             ))
           }
        </div>
    </div>
    </>
  )
}
