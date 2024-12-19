import React from "react";
import EmptyMessage from "./EmptyMessage";
import NoteItem from "./NoteItem";

function NoteSection({ header, section, notes, onDelete, onArchive }) {
  let content;

  if (notes.length > 0) {
    // Jika notes ada datanya
    content = (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    // Jika notes kosong
    content = <EmptyMessage />;
  }

  return (
    <div className={section}>
      <h2>{header}</h2>
      {content}
    </div>
  );
}

export default NoteSection;
