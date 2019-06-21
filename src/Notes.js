import React, { Component } from "react";
import ReactPaginate from "react-paginate";

import "./styles/notes.css";

const notes = [
    {
        title: "Dinner",
        text: "Eggs, milk, apples, something for wife and children",
        date: "Jan 8, 2019"
    },
    {
        title: "Duties",
        text:
            "Cleaning, vacuuming, dusting and polishing.  General tidying and other light household duties.    Washing up.   Cleaning the oven.",
        date: "May 29, 2019"
    },
    {
        title: "Work",
        text: "code, code, code, code...",
        date: "June 22, 2019"
    },
    {
        title: "Title1",
        text: "Some text...lala",
        date: "Some date..."
    },
    {
        title: "Title2",
        text: "Some text...lala",
        date: "Some date..."
    },
    {
        title: "TV series",
        text: "Game of Thrones (Fox)",
        date: "18:00"
    },
    {
        title: "Title3",
        text: "Some text...",
        date: "Some date..."
    },
    {
        title: "Title4",
        text: "Some text...",
        date: "Some date..."
    },
    {
        title: "Title5",
        text: "Some text...",
        date: "Some date..."
    }
];

export default class Notes extends Component {
    constructor(props) {
        super(props);

        this.notesPerPage = 4;
        this.filtered = [];

        this.state = {
            curPage: 0,
            searchRequest: "",
            notes
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handlePageClick(data) {
        this.setState({
            curPage: data.selected
        });
    }

    handleSearchInput(e) {
        this.setState({
            searchRequest: this._checkSearchRequest(e.target.value)
        });
    }

    _checkSearchRequest(req) {
        return req.replace(/</g, "‹").replace(/>/g, "›");
    }

    _filterList() {
        const lcSearch = this.state.searchRequest.toLowerCase();
        return notes.filter(
            element =>
                element.text.toLowerCase().indexOf(lcSearch) !== -1 ||
                element.title.toLowerCase().indexOf(lcSearch) !== -1 ||
                element.date.toLowerCase().indexOf(lcSearch) !== -1
        );
    }

    _renderPagination() {
        if (!this.filtered) return;
        return (
            <div className="container">
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={this.filtered.length / this.notesPerPage}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active-page"}
                />
            </div>
        );
    }
    _renderNotes() {
        const start = this.state.curPage * this.notesPerPage;
        this.filtered = this._filterList();

        return this.filtered.length === 0 ? (
            <h1 className="empty_content">
                Nothing is found by request: "{this.state.searchRequest}"
            </h1>
        ) : (
            <div className="notes-content">
                {this.filtered
                    .slice(start, start + this.notesPerPage)
                    .map((note, index) => (
                        <div className="notes_item" key={index}>
                            <h2 className="notes_item_title">{note.title}</h2>
                            <p className="notes_item_text">{note.text}</p>
                            <div className="notes_item_date">{note.date}</div>
                        </div>
                    ))}
            </div>
        );
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="section_header">
                        <div className="section_title">All my notes</div>
                    </div>
                    <div className="search_container">
                        <input
                            className="search_input"
                            type="text"
                            placeholder="Search.."
                            onInput={this.handleSearchInput}
                        />
                    </div>
                    {this._renderNotes()}
                    {this._renderPagination()}
                </div>
            </div>
        );
    }
}
