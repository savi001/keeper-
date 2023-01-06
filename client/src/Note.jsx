import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  const [mouseOver, setMouseOver] = useState(false);
  function HandlemouseOver() {
    setMouseOver(true);
  }
  function HandleMouseOut() {
    setMouseOver(false);
  }
  const Ustyle = {
    backgroundColor: "black",
    color: "#f5ba13"
  };
  async function HandleDelete () {
    props.onclick(props.id);
    const del=await fetch("/delete",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        title:props.title,
        content:props.content
      })
    })
    let c=await del.json();
    
  }
  return (
    <div className="note">
      <h1 name="title" value={props.title}>{props.title}</h1>
      <p name="content" value={props.content}>{props.content}</p>
      <button
        style={mouseOver ? Ustyle : null}
        onMouseOver={HandlemouseOver}
        onMouseOut={HandleMouseOut}
        onClick={HandleDelete}
      >
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default Note;
