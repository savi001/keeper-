import React, { createContext, useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Footer from "./Footer";


function Login(){
 
const navigate=useNavigate();
  const [userData,SetuserData]=useState({
    email:"",
    password:""
  })
  const [wrongCredential,setwrongCrendials]=useState(false);
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
function HandleChange(event) {
  var {name,value}=event.target;
  SetuserData(PrevData=>{
    return {...PrevData,[name]:value}
  })
  }
async function HandleLogin() {
  var {username,password}=userData;
  const res=await fetch("/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        username:username,
        password:password
    })

  })
  const statuss=await res.status;
  if(statuss===200){
    setwrongCrendials(false)
   await navigate("/");
    await reloadPage();
  }
  else if (statuss===300){
    alert("User not Registed , Please Register First !")
    navigate("/signup")
  }
  else{
    setwrongCrendials(true);
  }

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
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <form action="https://keeper-by-saurav.cyclic.app/auth/google" method="get">
            <button type="submit" className="btn btn-outline-warning">
               <GoogleIcon fontSize="large" className="social"/>
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
          <form method="post">
          <p style={{color:"red"}}>{wrongCredential?"Wrong Credentials Please Login with Correct input !":""}</p>
          <div className="form-outline mb-4">
            <input type="email" id="form3Example31" className="form-control form-control-lg"
              placeholder="Enter a valid email address" name="username" onChange={HandleChange} required={true}/>
            <label className="form-label" htmlFor="form3Example31">Email address</label>
          </div>

     
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" name="password" onChange={HandleChange} />
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
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} onClick={async ()=>{ await HandleLogin();
                
              }}>Login</button>
        
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
 
</section>
<Footer/>
    </div>
}
export default Login;
