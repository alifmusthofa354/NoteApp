import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NoteItemContent from "./NoteItemContent";

function NoteItem({
  title,
  body,
  createdAt,
  archived,
  id,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}

export default NoteItem;
