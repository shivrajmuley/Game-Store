import React from 'react'

const FriendList = () => {
  return (
<section className='bg-red-100 w-[270px] h-96 px-6 py-8 rounded-xl mt-10'>
<div className='flex  items-center gap-2'>
    <img src="images/profile.png"  className='w-8 object-cover rounded-full h-8'/>
<div className='leading-4'>
<p className='font-bold p-0 m-0'>Gojo Saturo</p>
<span className='text-xs font-semibold '>ID : 34254</span>
</div>  
  <button className='bg-stone-300 px-2 text-sm font-semibold rounded-md ml-3'>Online</button>
</div>
</section>
  )
}

export default FriendList