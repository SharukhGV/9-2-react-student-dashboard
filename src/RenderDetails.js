import React from "react"
import { useState } from "react"

function RenderDetails({alam}){
  const[showmoreorless, setshowmoreorless]=useState(false)


  function showcerts(x){
    if(showmoreorless===false){
        setshowmoreorless(true)
    }
    else{setshowmoreorless(false)}
    
}


function showcerts2(){
    if(showmoreorless===false){
        return (<div>Show More...</div>)
    }
    return (<div>Show Less...</div>)
    
}
    // e.preventDefault()
    
        if(showmoreorless ===true){
    return(

      
    <div>
                 <button  onClick={()=>{showcerts()}}>{showcerts2()}</button>

        <div>Code Wars</div>
        <div>Current Completed</div>
       <div>Total:{alam.codewars.current.total}</div> 
       <div>Last Week:{alam.codewars.current.lastWeek}</div> 
       <div>Goal</div>
       <div>Total:{alam.codewars.goal.total}</div> 
       <div>Last Week:{alam.codewars.goal.lastWeek}</div> 
    
       <div>1-on1-notes</div>
                    <form action="" method="get" class="form-example">
      <div class="form-example">
        <label for="name">Commenter's Name </label>
        <input type="text" name="name" id="name" required/>
      </div>
      <div class="form-example">
        <label for="email">Comment: </label>
        <input type="text" name="email" id="email" required />
      </div>
      <div class="form-example">
        <input type="submit" value="Add NOTE"/>
      </div>
    </form>
    
    </div>
    
    )}
    else{return(<button  onClick={()=>{showcerts()}}>{showcerts2()}</button>
    )}
    }

    export default RenderDetails