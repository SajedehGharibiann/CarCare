import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({children,className=""}) {
    const ref=useRef(null)
    const [visible,setVisible]=useState(false)

    useEffect(()=>{
        const observer=new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setVisible(true)
                observer.unobserve(entry.target)
            }
        },
    {
        threshold:0.15,
    }
    )
if(ref.current){
    observer.observe(ref.current)
}

return ()=>observer.disconnect()
    },[])
  return (
    <div ref={ref} className={`${visible ? "animate-fade-down":"opacity-0"} ${className}`}>
      {children}
    </div>
  )
}
