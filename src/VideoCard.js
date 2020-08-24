import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './VideoCard.css'

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className='VideoCard'>
            <img className='VideoCard_thumbnail' src={image} alt='' />
            <div className='videocard_info'>
                <Avatar classsName="video_avatar" alt={channel} src={channelImage} />
                <div className='videocard_text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
