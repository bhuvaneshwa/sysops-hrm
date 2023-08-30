
import React, { useState } from 'react'
import {BiSolidUserCircle,BiSolidDashboard} from 'react-icons/bi'
import {FiArrowLeftCircle} from 'react-icons/fi'
import {AiFillDashboard,AiFillSetting} from 'react-icons/ai'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  const menus =[
    {name:"Home",Link:"/home",icons:AiFillDashboard},
    {name:"Admin",Link:"/admin",icons:BiSolidDashboard},
    {name:"User",Link:"/user",icons:BiSolidUserCircle,margin:true},
    {name:"Settings",Link:"/settings",icons:AiFillSetting,margin:true}
];
const [open,setOpen]=useState(true);

  return (
    <section className='flex gap-6'>
    <div className={`bg-black min-h-screen ${open?'w-72':'w-16'}  duration-500 text-gray-100 px-4`}>
    
    <div className={`py-3 flex justify-end `}>
    <h1 style={{marginRight:'100px'}} className={`${!open && 'hidden'} font-bold`}>SysOps</h1>
 <FiArrowLeftCircle className={`m ${!open && 'rotate-180'} duration-700`} size={26} onClick={()=>setOpen(!open)} />
    </div>
<div>
<div className='mt-4 flex flex-col gap-4 relative'>
{menus?.map((menu,i)=>(
    <Link to={menu?.Link} key={i} className={` ${menu?.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-500 rounded-md`}>
<div>{React.createElement(menu?.icons,{size:'20'})}</div>
<h2 style={{transitionDelay:`${i+3}00ms`}} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
<h2 className={` ${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{menu?.name}</h2></Link>
) )}
</div>
</div>
    </div>
    
        
    </section>
  )
}

export default Sidebar