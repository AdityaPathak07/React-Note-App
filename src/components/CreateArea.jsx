import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [wideSpace,setWideSpace] = useState(false)

  function ChangeTransition(){
        setWideSpace(true)
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        
       {wideSpace ?
         <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        :
        null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={ChangeTransition}
          value={note.content}
          placeholder="Take a note..."
          rows={wideSpace ? 3:1}
        />
         <Zoom in={wideSpace ? true : false}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom> 
         
      </form>
    </div>
  );
}

export default CreateArea;
