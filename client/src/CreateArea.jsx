import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [welcome,Setwelcm]=useState(false);
  function HandleWelcome(){
    Setwelcm(true);

  }
  function HandleWel(){
    Setwelcm(false)

  }

  function HandleChange(event) {
    const { name, value } = event.target;
    setNote((prevvalue) => {
      var note = { ...prevvalue, [name]: value };
      
      return note;
    });
    return;
  }
 
  function HandlemouseOver() {
    setMouseOver(true);
  }
  function HandleMouseOut() {
    setMouseOver(false);
  }
  const Ustyle = {
    backgroundColor: "#BAD7E9",
    color: "#eee"
  };
  async function HandleSubmit(event) {
    const {title,content}=note;
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
    HandleWel();
    HandleMouseOut();
    props.onclick(note);
    const res= await fetch("/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:"sauravraj@gmail.com",
        title:title,
        content:content
      })
     
    

    })
    let p=await res.json();
    
  }
  return (
    <div>
      <form className="create-note"
      // action="../../post" method="post" 
        onSubmit={HandleSubmit}
        
      >
       {welcome && <input onChange={HandleChange} name="title" placeholder="Title" value={note.title} required={true}/>} 
        <textarea onClick={HandleWelcome}
          onChange={HandleChange}
          name="content"
          placeholder="Take a note..."
          rows={welcome? 3:1}
          value={note.content}
          required={true}
        />
       {welcome && <Zoom in={true} ><button style={mouseOver ? Ustyle : null}
        onMouseOver={HandlemouseOver}
        onMouseOut={HandleMouseOut}><AddIcon/></button></Zoom>} 
      </form>
    </div>
  );
}

export default CreateArea;
