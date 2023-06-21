import '../css/SearchBar.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function SearchBar({data}) {
  let history = useNavigate ();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div>
        <input type="text"placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchTermChange}></input>
        {searchTerm.length > 0 && (
        <ul>
          {filteredResults.map((item, index) => (
            <li key={index} onClick={()=>(history(`/component/${item.id}`))}>{item.title}</li>
          ))}
        </ul>
      )}
      </div>
    );
}
export default SearchBar;