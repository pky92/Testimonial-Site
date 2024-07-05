import React from 'react'
import { FaQuoteLeft,FaQuoteRight} from "react-icons/fa";

 
const  Cards=(props)=>{
  let review=props.review;
return (
   <div className='flex flex-col md:relative'>
    <div className='absolute mx-auto top-[-7rem] z-[10]'>
      <img  className='aspect-square rounded-full w-[140px] h-[140px] z-250'
      src={review.image}></img>

      <div className='w-[140px] h-[140px] absolute rounded-full top-[-10px] bg-red-300 z-[-20] right-[-4px]'></div>
    </div >

    <div className='text-center mt-7 '>
    
      <p className='font-bold text-2xl capitalize'>{review.name}</p>
    </div>

    <div className='text-center mt-7 '>
  <p className='text-violet-600 uppercase text-sm opacity-40'>{review.job}</p>
    </div>

<div className='text-violet-400 mx-auto mt-7'>
  {/* left quote */}
  <FaQuoteLeft />
</div>

<div className='text-center mt-4 text-slate-500'>
  {review.text}
</div>

<div className='text-violet-400 mx-auto mt-7'>
 {/* right quote */}
 <FaQuoteRight />
</div>


   </div>
);
}


export default Cards