import React from 'react';
import './SearchPage.css'
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
                <TuneOutLinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
        </div>
    )
}

export default SearchPage
