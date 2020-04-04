import React from 'react';
import '../search-box/search-box.style.css';;

export const SearchBox = ({ placeholder, handleChange }) =>{//plaveholder and handleChange coming in as props
    return <input type='search'
        className="search" 
        placeholder={placeholder}
        onChange={handleChange}
        // onChange={e => this.setState({searchFilter : e.target.value})}//append the searchField property in the state object with the value of the search box. event e is passed in order to target the element 
       />

}