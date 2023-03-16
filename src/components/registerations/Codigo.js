import React from 'react'
import './Webbit.css'
import Navbar from '../Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const eventRegister = () => {


  function HandleEventClick(e) {
    const formEle = document.getElementById("form");
    const formDatab = new FormData(formEle);
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbyiWWclMcETWUMU9fXFhLnPIvNIMQLYnTpskXcTnI1qSY7xuNznO_vn3tNc64YyhOZD/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => {
      // console.log("Response status:", res.status);
      // alert('Successfully submitted');
      toast.success("Successfully submitted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      document.getElementById("form").reset();
    })
    .catch((error) => {
      console.log(error);
    });

   alert("Please wait your response is getting submitted")

  }



  return (
    <>

        <Navbar/>
       
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        
       <div className='col-lg-7 col-md-12 col-12 form-step'>
        

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2 className="font-normal">Codigo 3.0</h2>
        <h2 className="font-normal">Codigo</h2>
        <div id="personalInfo">
                            <h1 id="personal-info" >Personal Information</h1>
                        </div>
        </div>
                   
                       
                       <form action="" className='reg-form' onSubmit={(e) => HandleEventClick(e)} id="form">

                       

                    
                       
                       <label id='lable-tag' for="name">Name </label>
                       <input className="column" type="text" name="name" id="registeration-input" placeholder="Same as to be printed on Certificates" required/>
                     
                        
                        <label id="lable-tag" className="" for="email" >Email   </label>
                        <input type="email" className="column" name="email" id="registeration-input" placeholder="Preferred official email address" required></input>
                   
                
                        <label id="lable-tag" className="" for="contact">Contact   </label>
                        <input type="tel" className="column" name="contact" id="registeration-input" placeholder="Active whatsapp Number" required></input>

                        
                        <label id="lable-tag" className="" for="college_name">College Name  </label>
                        <input type="tel" className="column" name="college_name" id="registeration-input" placeholder="Enter Your College Name" required ></input>

                        
                        <label id="lable-tag" className="" for="academic_year">Academic Year </label>
                        <input type="tel" className="column" name="academic_year" id="registeration-input" placeholder="Eg. FE/SE/TE/BE" required></input>

                        
                        <label id="lable-tag" className="" for="Hacker_Rank_Profile" >HackerRank Profile</label>
                        <input type="tel" className="column" name="Hacker_Rank_Profile" id="registeration-input" placeholder="HackerRank Profile URL" required></input>
                       

                        <label id="lable-tag" className="" for="" >Enter Your PRN</label>
                        <p className='p-tag'>*Note: If you are from Other College Please Pay registration fee  And Add transaction ID otherwise registration will be rejected.</p>
                       
                        <input type="text" className="column" name="PRN" id="registeration-input" placeholder="PRN or Transaction ID" required></input>
                        <label id="lable-tag" className="" for="UPI ID" >UPI ID:</label>
                        
                        <label id="lable-tag" className="" for="PRN" >Enter Your PRN / Transaction ID</label>
                        <p style={{color:'red'}}>If you are from other college please pay registeration fees and add Transaction ID otherwise submission will be rejected</p>
                        <input type="tel" className="column" name="PRN" id="registeration-input" placeholder="Active whatsapp Number" required></input>
                      

                       <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                          <input name="Name" type="submit" className='Button-for-submission'/>
                          <ToastContainer />
                       </div>

                      
                       </form>
                       </div>
                   
       </div>
                    

         
    </>
  )
}

export default eventRegister
