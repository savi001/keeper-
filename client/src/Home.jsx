import React, { useState,useEffect } from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

let i=1
function Home() {

  const [isLoggedin,setLogin]=useState(false);
  const [gotusername,setusername]=useState("User , Please Login")
  const [noteArray, SetnoteArray] = useState([]);

  useEffect(()=>{
    final();
  },[gotusername]);

async function final(){
 await Handlelogin();
 await getNotes();
}
  function HandleClick(note) {
    SetnoteArray((prevArray) => {
      var a = [...prevArray, note];

      return a;
    });
  }
  async function Handlelogin(){
    const res=await fetch("/isLoggedin",{
      method:"GET"
    })
    const data=await res.json()
    if(data){
      
      
      
      setusername(" , Mr. "+data.name)
      setLogin(true);
    }
    else{
      setusername("User , Please Login")
      setLogin(false);
   
    }
  }
  function DeleteItem(id) {
    SetnoteArray((prevArray) => {
      return prevArray.filter((item, index) => {
        return index != id;
      });
    });
  }
  const getNotes= async ()=>{
    try{
      const res= await fetch("/getnote",{
        method:"GET"
      })
      const data=await res.json();
      SetnoteArray(data)
    }catch(err){
      console.log(err);
    }
  }
 
  return (
    <div>
     <p className="username">Hello <span className={isLoggedin?"wave":null}>👋</span> {gotusername} </p>
      <CreateArea onclick={HandleClick} />
      { noteArray.map ((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onclick={DeleteItem}
          />
        );
      })}
    
      <Footer />
    </div>
  );
}

export default Home;
