import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      searchQuery: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery }, () => {
      this.props.searchNote(searchQuery);
    });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={this.state.searchQuery}
          onChange={this.onSearchChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
