import React, { useState } from "react";
import style from "./AddNote.module.css";
import NoteCard from "../NoteCard/NoteCard";

const AddNote = ({ dataInsert }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const noteInput = (e) => {
    setNote(e.target.value);
  };

  const addNote = () => {
    if (title.trim() !== "" && note.trim() !== "") {
      let newNote = {
        key: Date.now(),
        id: "ID" + Date.now(),
        Title: title,
        Note: note,
      };

      dataInsert(newNote);

      setTitle("");
      setNote("");
    }
  };

  return (
    <div className={style.addNote}>
      <h2 className={style.title}>Add a New Note</h2>

      <input
        value={title}
        className={style.noteTitle}
        placeholder="Title"
        type="text"
        onChange={titleInput}
      />

      <div className={style.btnDesCon}>
        <textarea
          value={note}
          className={style.noteDescription}
          placeholder="Take a note..."
          onChange={noteInput}
        ></textarea>

        <button className={style.addBtn} onClick={addNote}>
          + Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
