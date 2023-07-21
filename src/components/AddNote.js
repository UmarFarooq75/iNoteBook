import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="contactusMain ">
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Add Notes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="con_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Add Title"
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        className="contactus"
                        placeholder="Enter tag"
                        type="text"
                        name="tag"
                        value={note.tag}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactusmess"
                        placeholder="Write Something..."
                        type="text"
                        name="description"
                        value={note.description}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn" onClick={handleClick}>
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
