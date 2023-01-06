import React ,{useEffect, useState}from "react";
import { NavLink} from "react-router-dom";

import HighlightIcon from '@mui/icons-material/Highlight';

function LHeader() {
  useEffect(()=>{
    Handleloginn();

  })
  const [gotusername,setusername]=useState("Home")
  const [isLoggedin,setLogin]=useState(false);
  const [dekhologin,setdekhologin]=useState("Login")

  async function HandleLogout(){
    const res=await fetch("/logout",{
      method:"GET"
    })
    const data= await res.json();
    if(data.msg==="success"){
      setdekhologin("Login")
      setLogin(false);
    }
  }
  async function Handleloginn(){
    const res=await fetch("/isLoggedin",{
      method:"GET"
    })
    const data=await res.json()
    if(data){

      setusername("Welcome , Mr. "+data.name)
      setLogin(true);
    }
    else{
      setusername("Home")
      setLogin(false);
      
    }
  }
  console.log(isLoggedin);
  let activeStyle = {
    color: "#460C68"
  };
  let Inactive={
    color:"#FFF6BD"
  }
  const [mouseOver, setMouseOver] = useState(false);
  function HandlemouseOver() {
    setMouseOver(true);
  }
  function HandleMouseOut() {
    setMouseOver(false);
  }
  const Ustyle = {
    
    color: "#3C4048"
  };
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <h1 
      style={mouseOver ? Ustyle : null}
        onMouseOver={HandlemouseOver}
        onMouseOut={HandleMouseOut}
        > <HighlightIcon fontSize="larger"/>Keeper</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <NavLink style={({ isActive }) =>
              (isActive ? activeStyle : Inactive)
              // (isActive ? setLogin(true):setLogin(false))
            } 
            to="/">{gotusername}</NavLink>
            </li>
            <li className="nav-item">
<NavLink style={({ isActive }) =>
            isActive ? activeStyle : Inactive
          } to="/login" 
          onClick={HandleLogout}
          >Logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}



export default LHeader;

