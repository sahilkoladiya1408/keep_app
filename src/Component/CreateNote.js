import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              value={note.title}
              name="title"
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            rows=""
            column=""
            value={note.content}
            name="content"
            onChange={InputEvent}
            placeholder="Write a note..."
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
