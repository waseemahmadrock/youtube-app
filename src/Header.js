import React, { useState } from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon />
                <Link to='/'>
                    <img
                        className='header_logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                        alt=''
                    />
                </Link>
            </div>
            <div className='header_input'>
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder='Search'
                    type='text'
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header_input_button' />
                </Link>
            </div>

            <div className='header_icons'>

                <VideoCallIcon className='header_icon' />
                <AppsIcon className='header_icon' />
                <NotificationIcon className='header_icon' />
                <Avatar
                    alt='Waseem Ahmad'
                    src='https://avatars3.githubusercontent.com/u/29482520?s=400&u=0dfb8c6556311a1114a832311c5d31b4c5c90d9c&v=4'
                />
            </div>

        </div>
    )
}


export default Header;
