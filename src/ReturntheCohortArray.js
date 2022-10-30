import React from "react"
// import { useState } from "react"
import RenderDetails from "./RenderDetails"

function ReturntheCohortArray({currentCo}){
    // const[showmoreorless, setshowmoreorless]=useState(false)
    



// function showcerts(x){
//     if(showmoreorless===false){
//         setshowmoreorless(true)
//     }
//     else{setshowmoreorless(false)}
    
// }


// function showcerts2(){
//     if(showmoreorless===false){
//         return (<div>Show More...</div>)
//     }
//     return (<div>Show Less...</div>)
    
// }
        function onTracktoGraduate(ontrack){
            if(!!ontrack.certifications.resume && !!ontrack.certifications.linkedin && !!ontrack.certifications.github &&!!ontrack.certifications.mockInterview && Number(ontrack.codewars.current.total)>600 ){
                return (<div>On Track to Graduate</div>)
            }
            
            }

            function birthdatarender(birth){
                let  newBirthArray =[]
                if(typeof(birth)=== "string"){
                let birthArray =  birth.split("/")
                // console.log(birthArray)
                
                   if( birthArray[0] === "1"){newBirthArray.push("January")};
                   if( birthArray[0] === "2"){newBirthArray.push("February")};
                   if( birthArray[0] === "3"){newBirthArray.push("March")};
                   if( birthArray[0] === "4"){newBirthArray.push("April")};
                   if( birthArray[0] === "5"){newBirthArray.push("May")};
                   if( birthArray[0] === "6"){newBirthArray.push("June")};
                   if( birthArray[0] === "7"){newBirthArray.push("July")};
                   if( birthArray[0] === "8"){newBirthArray.push("August")};
                   if( birthArray[0] === "9"){newBirthArray.push("September")};
                   if( birthArray[0] === "10"){newBirthArray.push("October")};
                   if( birthArray[0] === "11"){newBirthArray.push("November")};
                   if( birthArray[0] === "12"){newBirthArray.push("December")};
                
                  newBirthArray.push(birthArray[1])
                  newBirthArray.push(birthArray[2])
                }
                return (<div>{`${newBirthArray[0]} ${newBirthArray[1]}, ${newBirthArray[2]}`}</div>)
                }
                

                // function renderDetails(alam){
                //     // e.preventDefault()
                    
                //         if(showmoreorless ===true){
                //     return(
                //     <div>
                        
                //         <div>Code Wars</div>
                //         <div>Current Completed</div>
                //        <div>Total:{alam.codewars.current.total}</div> 
                //        <div>Last Week:{alam.codewars.current.lastWeek}</div> 
                //        <div>Goal</div>
                //        <div>Total:{alam.codewars.goal.total}</div> 
                //        <div>Last Week:{alam.codewars.goal.lastWeek}</div> 
                    
                //        <div>1-on1-notes</div>
                //                     <form action="" method="get" class="form-example">
                //       <div class="form-example">
                //         <label for="name">Commenter's Name </label>
                //         <input type="text" name="name" id="name" required/>
                //       </div>
                //       <div class="form-example">
                //         <label for="email">Comment: </label>
                //         <input type="text" name="email" id="email" required />
                //       </div>
                //       <div class="form-example">
                //         <input type="submit" value="Add NOTE"/>
                //       </div>
                //     </form>
                    
                //     </div>
                    
                //     )}
                //     else{return(<div></div>)}
                //     }
                    
    return (
        <div>{currentCo.map((element) =>{  return(
        
            <div key={element.id} className="students">
          <h5>{element.names.preferredName} {element.names.middleName} {element.names.surname}</h5>
        
          <img style={{width: "100px"}} src={element.profilePhoto} alt="profile images"></img>
         <div> {element.username}</div>
         <div> <strong>Birthday:</strong> {birthdatarender(element.dob)}</div>
         <h6>{onTracktoGraduate(element)}</h6>
         

         <div>{<RenderDetails alam={element} />}</div>
         
                
</div>)})}</div>)}

export default ReturntheCohortArray