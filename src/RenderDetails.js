import React from "react"
import { useState } from "react"
// let renderArayofObject = []
function RenderDetails({alam}){
  const[showmoreorless, setshowmoreorless]=useState(false)
  // const [comment, setComment] = useState("");

  // const [comment2, setComment2] = useState("");
  // function handleNickNameChange(event) {
  //   setComment(...comment,event.target.value);
  // }
  // function handleNickNameChange2(event) {
  //   setComment2(...comment2,event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
 
  // }
  
  // further down
  
  // <input type="text" onChange={handleNickNameChange} />

// const[formadd, setformadd]= useState("")

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
                 <div className="theBOX">

        <h3>Code Wars</h3>
        <div>Current Completed</div>
       <div>Total:{alam.codewars.current.total}</div> 
       <div>Last Week:{alam.codewars.current.lastWeek}</div> 
       <div>Goal</div>
       <div>Total:{alam.codewars.goal.total}</div> 
       <div>Last Week:{alam.codewars.goal.lastWeek}</div> 
       <div></div>

       </div>
       <div className="theBOX">
        
<h3>Scores</h3>
<div>{(alam.cohort.scores.assignments*100).toFixed(0)}%</div>
<div>{(alam.cohort.scores.projects*100).toFixed(0)}%</div>
<div>{(alam.cohort.scores.assessments*100).toFixed(0)}%</div>
<div></div>
</div>
<div className="theBOX">
  <h3>Certifications</h3>
<div>{alam.certifications.resume?"Resume: ✅":"Resume: ❌"}</div>
<div>{alam.certifications.linkedin?"linkedin: ✅":"linkedin: ❌"}</div>
<div>{alam.certifications.github?"github: ✅":"github: ❌"}</div>
<div>{alam.certifications.mockInterview?"mock Interview ✅":"mock Interview ❌"}</div>
<div></div>

</div>


<br/>
       <fieldset>
        <legend>1-on1-notes</legend>
                    <form   method="get" class="form-example">
                      <div>
        <label for="name">Commenter's Name </label>
        <input   type="text" name="name" id="name" required/>
  
        <label  for="comment">Comment: </label>
        <input type="text" name="comment" id="comment" required />
<input type="submit" value="Add NOTE"/>   
        </div>
    </form>
    </fieldset>
    </div>
    
    )}
    else{return(<button  onClick={()=>{showcerts()}}>{showcerts2()}</button>
    )}
    }

    export default RenderDetails