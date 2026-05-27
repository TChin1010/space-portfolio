/**
 * @fileoverview Contains parts of the display that displays
 * an expanded description of the object that they just pressed
 */
import React, { useEffect, useState } from 'react';
import Div from '../components/html/Div';
import './MusicInfo.css';

type ExpandedInfoType = {
    opened: boolean,
    src?: string;
}

export function ExpandedInfo({src, opened = true} : ExpandedInfoType) {
    const [isOpened, setOpened] = useState(opened);
    return (
        <Div id='playlist-bar' style={{
            width: isOpened ? '350px' : '0px',
            transition: 'width 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: 'var(--default-margins)',
            }}>
            <img src={src} alt='Image loading error'
                style={{
                    alignSelf: 'center',

                    width: '95%',  
                    borderRadius: 'var(--default-boarder-radius)'
                }}></img>
        </Div>
    );
}

export default ExpandedInfo;
