import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import NotesList from "./components/Noteslist/NotesList";

const App = () => {
  if (localStorage.length == 0) {
    localStorage.setItem("notes", JSON.stringify([]));
  }

  const [noteData, setNoteData] = useState(
    JSON.parse(localStorage.getItem("notes")),
  );

  const dataInsert = (newData) => {
    const newArrAfterInsert = [...noteData];
    newArrAfterInsert.unshift(newData);

    localStorage.setItem("notes", JSON.stringify(newArrAfterInsert));

    setNoteData(newArrAfterInsert);
  };

  const dataDelete = (noteID) => {
    let newArr = [...noteData];

    const newArrAfterDelete = newArr.filter((note) => {
      return note["id"] !== noteID;
    });

    setNoteData(newArrAfterDelete);
    localStorage.setItem("notes", JSON.stringify(newArrAfterDelete));
  };

  return (
    <div className="appContainer">
      <div className="app">
        <Header />
        <AddNote dataInsert={dataInsert} />
        <NotesList data={noteData} dataDelete={dataDelete} />
      </div>
    </div>
  );
};

export default App;
