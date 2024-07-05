import React from 'react'
import Cards from './Cards';
import { useState } from 'react';
import { FiChevronRight,FiChevronLeft } from 'react-icons/fi';


const Testimonials = (props) => {
    let reviews=props.reviews;
    const [index,setindex]=useState(0);

    function leftHandler(){
      if(index===0)setindex(reviews.length-1);
      else setindex(index-1);
    }
    function rightHandler(){
      if(index===(reviews.length-1))setindex(0);
      else setindex(index+1);
    }
    function surpriseHandler(){
      let randomIndex=Math.floor(Math.random()*reviews.length);
      setindex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl'>
    <Cards review={reviews[index]}/>

    
<div className='flex text-3xl mt-5 gap-3 text-violet-300 font-bold justify-center items-center'>
  <button 
  onClick={leftHandler}
  className='cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>
  <button
  onClick={rightHandler}
   className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>
</div>

<div className='mt-5'>
  <button 
  onClick={surpriseHandler}
  className='bg-violet-300 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white'>Surprise Me</button>
</div>
    </div>
  ) 
}

export default Testimonials