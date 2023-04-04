import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
  };

  const toDelete = (id) => {
    setAddItem((oldData) => 
      oldData.filter((currData,index)=> {
        return index !== id;
      })
    )
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={toDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
