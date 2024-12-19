import React from "react";
import { getInitialData } from "../utils/index";
import NoteSearch from "./NoteSearch";
import NoteInput from "./NoteInput";
import NoteSection from "./NoteSection";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    // Memfilter notes berdasarkan searchQuery
    const filteredNotes = this.state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) // Pencarian case-insensitive
    );
    // Filter data untuk masing-masing NoteSection
    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <NoteSearch searchNote={this.onSearchHandler} />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteSection
            header={"Catatan Aktif"}
            section={"note-active"}
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <NoteSection
            header={"Arsip"}
            section={"note-archive"}
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
