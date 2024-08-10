import { useEffect, useState } from 'react'

// eslint-disable-next-line no-unused-vars
function useDate() {
    const locale='en'
    const[today,setDate]=useState(new Date())

    useEffect(()=>
    {
        const timer=setInterval(()=>
        {
            setDate( new Date())


        },60*1000)
        return ()=>{
            clearInterval( timer)
    
        }

    },[])
   const day=today.toLocaleDateString(locale,{weekday:'long'})
   const date=`${day},${today.getDate()},${today.toLocaleDateString(locale,{month:'long'})}\n\n`
   const time=today.toLocaleTimeString( locale,{hour:'2-digit',hour12:true,minute:'2-digit',second:'2-digit'}) 
   return{
    date,
    time
    
   }

   // eslint-disable-next-line no-unreachable
   return {
    date, time
}
}