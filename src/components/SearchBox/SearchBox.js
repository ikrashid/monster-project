import React from 'react';
import './SearchBox.css';

const SearchBox = (props) =>{
    return(
        <input className='Search' type="search" placeholder={props.placeholder} onChange={props.searchHandler}/>
    )

}

export default SearchBox;