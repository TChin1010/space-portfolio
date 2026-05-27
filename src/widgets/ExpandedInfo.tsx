    /**
     * @fileoverview Contains parts of the display that displays
     * an expanded description of the object that they just pressed
     */
    import React, { useEffect, useState } from 'react';
    import Div from '../components/html/Div';
    import Button from '../components/html/Button';
    import './ExpandedInfo.css';

    type ExpandedInfoType = {
        opened: boolean,
        src?: string,
        title?: string,
        details?: string
    }

    export function ExpandedInfo({src, opened = true, title='placeholder', details='placeholder'} : ExpandedInfoType) {
        const [isOpened, setOpened] = useState(opened);
        return (
            <>
                <Div className='side-bar' id='expanded-info' style={{width: isOpened ? '250px' : '20px',}}>
                    <Div className='side-bar-title'>
                        <Button onClick={() => {setOpened(!isOpened)}}>x</Button>
                        {isOpened && <h2  style={{textAlign:'right'}}id='playlist-bar-h2'>Song info</h2>}
                    </Div>
                    {isOpened && <>
                        <img src={src} alt='Image loading error'></img>
                        <h2>{title}</h2>
                        <p>{details}</p>
                    </>}
                </Div>
            </>

        );
    }

    export default ExpandedInfo;
