import React from "react";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import NoteCard from "./components/NoteCard/NoteCard";
import NotesList from "./components/Noteslist/NotesList";

const App = () => {
  return (
    <div className="appContainer">
      {/* this container will contain
       header, note reciever, note list section */}
      <div className="app">
        <Header />
        <AddNote />
        <NotesList />
        {/* <NoteCard /> */}
      </div>
    </div>
  );
};

export default App;
