import React, { useState } from "react";
import AddItem from "@material-ui/icons/Add";
import ButtonItem from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expanded, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
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
  function expandFunc() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expandFunc}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
        />
        <Zoom in={expanded}>
          <ButtonItem onClick={submitNote}>
            <AddItem />
          </ButtonItem>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
