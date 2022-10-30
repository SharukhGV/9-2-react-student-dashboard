import React from "react"
// import './sidepanel.css'; 
import './App.css';
// import SelectedCohort from "./SelectedCohorts";

// import Winter2025 from "./Winter2025";
import { useState } from "react";
import ReturntheCohortArray from "./ReturntheCohortArray"
// import SelectedCohort from "./SelectedCohorts";
const data = require("./data.json");


function SidePanel(){
var arraySessions = [];
var arraySFORMATTED1 = [];
var arraySFORMATTED2 = [];
var finalFormatted = [];
// let booleanALLStudents = true;

// const variousCohortArray = []
// console.log(variousCohortArray[variousCohortArray.length-1])
const[booleanALLStudents, setbooleanALLStudents]=useState(true)
const [season7,setseason7]=useState("All Students")
const[totalstudents,settotalstudents]=useState(data.length)
const[currentCo, setCurrentCo]=useState(data)
// const[showmoreorless, setshowmoreorless]=useState(false)

// const [clickedIndex, setClickedIndex] = useState({});

//     [{
//     id: "",
//     names: {
//         preferredName: "",
//         middleName: "",
//         surname: "",
//     },
//     username: "",
//     dob: "",
//     profilePhoto: "",
//     codewars: {
//         current: {
//             total: 0,
//             lastWeek: 0,
//         },
//         goal: { "total": 0, "lastWeek": 0 },
//     },
//     certifications: {
        
//       "resume": false,
//       "linkedin": false,
//       "github": false,
//       "mockInterview": false
//     },
//     notes: 
//         [],
//     cohort: {
//         "cohortCode": "Winter0000",
//       "cohortStartDate": "00/00/00",
//       "scores": { "assignments": 0, "projects": 0, "assessments": 0 }
//     }
// }]);


// const[booleanALLStudents, setbooleanALLStudents]=useState(true)
// const [season7,setseason7]=useState("All Students")
// const[totalstudents,settotalstudents]=useState(data.length)

// let variousCohortArray = []

data.map(session => {return arraySessions.push(session.cohort.cohortCode)});

var uniqueSessions = arraySessions.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

// function returnElem(e){
//     if(e.length===10){
//         return (e[e.length-10])(e[e.length-9])(e[e.length-8])(e[e.length-7])(e[e.length-6])(e[e.length-5])
//     }
//     else{return (e[e.length-8])(e[e.length-7])(e[e.length-6])(e[e.length-5])}
// }
let yearSession = uniqueSessions
yearSession.map(elem => {return arraySFORMATTED1.push(elem.slice(-4))});
let seasonSession = uniqueSessions
seasonSession.map(elem => {return arraySFORMATTED2.push(elem.slice((-elem.length),-4))});


for(let i=0; i<arraySFORMATTED2.length;i++){
    // if(Number(arraySFORMATTED1[i])

    finalFormatted.push(`${arraySFORMATTED2[i]} ${arraySFORMATTED1[i]}`)
}

//....................................RENDER CHANGE IN COHORTS


    // for (let i=0;i<uniqueSessions.length;i++){


        // let thelength = uniqueSessions.length;

// let lengthArray = []
// for (let i=0;i<uniqueSessions.length;i++){
//     lengthArray.push(i)
// }

                         
// if(lengthArray.forEach((index) => {data.filter(element=>{element.cohort.cohortCode.includes(uniqueSessions[index])})})){

// return (
//             <div>
            
//             {data.map(element =>{  return(
            
//                 <div key={element.id} className="card">
//               <h5>{element.names.preferredName} {element.names.middleName} {element.names.surname}</h5>
            
//               <img style={{width: "100px"}} src={element.profilePhoto} alt="profile images"></img>
//              </div>    ) })}
            
//             </div>
//             )
// }


        // let theCurrentCohort = data.filter(element=>{element.cohort.cohortCode.includes(uniqueSessions[i])})
         
         
         
         

// 
    // }
    
    // }

//....................................RENDER CHANGE IN COHORTS


// function rendafina(y){
// function birthdatarender(birth){
// let  newBirthArray =[]
// if(typeof(birth)=== "string"){
// let birthArray =  birth.split("/")
// // console.log(birthArray)

//    if( birthArray[0] === "1"){newBirthArray.push("January")};
//    if( birthArray[0] === "2"){newBirthArray.push("February")};
//    if( birthArray[0] === "3"){newBirthArray.push("March")};
//    if( birthArray[0] === "4"){newBirthArray.push("April")};
//    if( birthArray[0] === "5"){newBirthArray.push("May")};
//    if( birthArray[0] === "6"){newBirthArray.push("June")};
//    if( birthArray[0] === "7"){newBirthArray.push("July")};
//    if( birthArray[0] === "8"){newBirthArray.push("August")};
//    if( birthArray[0] === "9"){newBirthArray.push("September")};
//    if( birthArray[0] === "10"){newBirthArray.push("October")};
//    if( birthArray[0] === "11"){newBirthArray.push("November")};
//    if( birthArray[0] === "12"){newBirthArray.push("December")};

//   newBirthArray.push(birthArray[1])
//   newBirthArray.push(birthArray[2])
// }
// return (<div>{`${newBirthArray[0]} ${newBirthArray[1]}, ${newBirthArray[2]}`}</div>)
// }




  
// function organizeCohorts(x){

//   for(let i=0; i<finalFormatted.length;i++){

// if(finalFormatted[i].)





//     if(finalFormatted.includes(spring))

//   }

// }

// function onTracktoGraduate(ontrack){
// if(!!ontrack.certifications.resume && !!ontrack.certifications.linkedin && !!ontrack.certifications.github &&!!ontrack.certifications.mockInterview && Number(ontrack.codewars.current.total)>600 ){
//     return (<div>On Track to Graduate</div>)
// }

// }




// setCurrentCo(Object.entries())
function renderSpecificCohort(y=""){
    

    if(booleanALLStudents===true){
        let specificdata = data.filter(elem=>{return elem});
        setCurrentCo(specificdata)
        settotalstudents(currentCo.length)

    }
    else{
    

       let specificdata = data.filter(elem=>{return elem.cohort.cohortCode.includes(y.replaceAll(" ",""))});
       
            // return (
            //                 <div>
                            
            //                 {specificdata.map(element =>{  return(
                            
            //                     <div key={element.id} className="card">
            //                   <h5>{element.names.preferredName} {element.names.middleName} {element.names.surname}</h5>
                            
            //                   <img style={{width: "100px"}} src={element.profilePhoto} alt="profile images"></img>
            //                  </div>    ) })}
                            
            //                 </div>
            //                 )
                
                
            //                 
            // variousCohortArray.push(specificdata)
            setCurrentCo(specificdata)
            settotalstudents(currentCo.length)

            // settotalstudents(specificdata.length)

        //    return specificdata
    }
        }
            



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


// function renderDetails(alam){
// // e.preventDefault()

//     if(showmoreorless ===true){
// return(
// <div>
    
//     <div>Code Wars</div>
//     <div>Current Completed</div>
//    <div>Total:{alam.codewars.current.total}</div> 
//    <div>Last Week:{alam.codewars.current.lastWeek}</div> 
//    <div>Goal</div>
//    <div>Total:{alam.codewars.goal.total}</div> 
//    <div>Last Week:{alam.codewars.goal.lastWeek}</div> 

//    <div>1-on1-notes</div>
//                 <form action="" method="get" class="form-example">
//   <div class="form-example">
//     <label for="name">Commenter's Name </label>
//     <input type="text" name="name" id="name" required/>
//   </div>
//   <div class="form-example">
//     <label for="email">Comment: </label>
//     <input type="text" name="email" id="email" required />
//   </div>
//   <div class="form-example">
//     <input type="submit" value="Add NOTE"/>
//   </div>
// </form>

// </div>

// )}
// else{return(<div></div>)}
// }

        

// function returntheCohortArray(){
    
//     return (
//         <div>{currentCo.map((element) =>{  return(
        
//             <div key={element.id} className="students">
//           <h5>{element.names.preferredName} {element.names.middleName} {element.names.surname}</h5>
        
//           <img style={{width: "100px"}} src={element.profilePhoto} alt="profile images"></img>
//          <div> {element.username}</div>
//          <div> <strong>Birthday:</strong> {birthdatarender(element.dob)}</div>
//          <h6>{onTracktoGraduate(element)}</h6>
         

//          <button  onClick={()=>{showcerts()}}>{showcerts2()}</button>
//          <div>{renderDetails(element)}</div>
         
                
// </div>)})}

     

        
        // </div>)}


        
                 



return(
    <section className="box e">

    <div className="b">
        <p><strong>Choose a Class by Start Date</strong></p>
<div onClick={()=>{{setbooleanALLStudents(true);renderSpecificCohort();setseason7("All Students");
}}}>All Students</div>

<div>
{finalFormatted.map(x=>{return <p key={x} onClick={() => {setbooleanALLStudents(false);
renderSpecificCohort(x);setseason7(x);}}>{x}</p>})}
</div>
</div>


<div className="c">
    <h3><strong>{season7}</strong></h3>
    <h6>Total Students: {totalstudents}</h6>
{<ReturntheCohortArray currentCo={currentCo} />}
</div>

</section>
)   


}


export default SidePanel