import React, { useState } from 'react';

const Search = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (event) => {
        setSearchValue(event.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (event) => {
        event.preventDefault();
        search(searchValue);
        resetInputField();
    }

    return(
        <form className="search">
            <input type="text" value={searchValue} onChange={handleSearchInputChanges} />
            <input type="submit" value="SEARCH" onClick={callSearchFunction} />
        </form>
    );
}

export default Search;