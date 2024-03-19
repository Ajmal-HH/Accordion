import { useState } from "react"
import React from 'react';


function Accordion({accordionData}) {
    const [accordionIDs,setAccordionIDs] = useState([])

const handlerAccordion = (newId)=>{
   setAccordionIDs((prev_acc_id)=>{
    return accordionIDs.includes(newId) ? accordionIDs.filter((acc_id)=>acc_id !== newId) : [...prev_acc_id,newId]
   })
}
  return (
<> 
{
   accordionData && accordionData.map(({id,title,desc})=>(
        <div className="border-2 border-black ml-52 mr-52 mt-2" key={id} >
        <div className="accordion-title" onClick={()=>handlerAccordion(id)}>
            <h3>{title}</h3>
        </div>
       {
        accordionIDs.map((acc_id,index)=>(
            acc_id ===  id && (
                <div className="accordion-desc" key={index}>
                <p>{desc}</p>
            </div>
            )
        ))
       }
    </div>
    ))
}
</>
  )
}

export default Accordion
