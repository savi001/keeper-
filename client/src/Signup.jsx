import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from "./Footer";


 function Signup(){
    const navigate=useNavigate ();
    const [signupU,Setsignup]=useState({
        username:"",
        name:"",
        password:""
    })
   
 async  function reloadPage() {
      // The last "domLoading" Time //
      var currentDocumentTimestamp =
      new Date(performance.timing.domLoading).getTime();
      // Current Time //
      var now = Date.now();
      // Ten Seconds //
      var tenSec = 1 * 1000;
      // Plus Ten Seconds //
      var plusTenSec = currentDocumentTimestamp + tenSec;
      if (now > plusTenSec) {
      location.reload();
      } else {}
      }
async function HandleSignUp(event){
    event.preventDefault();
    const {username,name,password}=signupU
    const res=await fetch("/userRegistration",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            username:username,
            name:name,
            password:password
        })
    })
    const data=await res.json();
   
    if(data.rescode===1){
        
        alert(data.message)
      await navigate("/");
      await reloadPage();
    }
    else if(data.rescode===0){
        alert(data.message)
        navigate("/login");
    }
    else if(data.rescode==2){
        alert(data.message)
    }


}
function HandleChange(event){
    const {name,value}=event.target;
 
    Setsignup((prevValue)=>{
        var data={...prevValue,[name]:value}
      
        return data
    })


}



async   function AuthGoogle() { 
    const res=await fetch("/auth/google",{
      method:"GET"
    })
    const data=res.json();

   }
    return <div>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign up with </p>
            <form action="https://keeper-by-saurav.cyclic.app/auth/google" method="get">
            <button type="submit" className="btn btn-outline-warning">
               <GoogleIcon fontSize="large" className="social" />
            </button>
            </form>
            <form action="https://keeper-by-saurav.cyclic.app/auth/facebook" method="get">
            <button type="submit" className="btn btn-outline-warning">
              <FacebookIcon fontSize="large" className="social"/>
            </button>
            </form>

            <form action="https://keeper-by-saurav.cyclic.app/auth/github" method="get">
            <button type="submit" className="btn btn-outline-warning">
              <GitHubIcon fontSize="large" className="social"/>
            </button>
            </form>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <form  onSubmit={async ()=>{ await HandleSignUp(event);
          
        }
          }>
          <div className="form-outline mb-4">
            <input type="text" id="form3Example31" className="form-control form-control-lg"
              placeholder="Enter Your Full name" name="name" onChange={HandleChange} required={true}/>
            <label className="form-label" htmlFor="form3Example31">Your Name</label>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="form3Example32" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name="username" onChange={HandleChange} required={true}/>
            <label className="form-label" htmlFor="form3Example32">Email address</label>
          </div>
     
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" name="password" onChange={HandleChange} required={true}/>
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>
          

          <div className="d-flex justify-content-between align-items-center">
    
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} > Sign Up </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already Registered ?  <a href="/login"
                className="link-danger" role="button">Login</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>


</section>
 <Footer/>
    </div>
   
}
export default Signup