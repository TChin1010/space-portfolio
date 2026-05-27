/**
 * @fileoverview Contains parts of the PlaylistBar
 */
import React, { useState } from 'react';
import Div from '../components/html/Div';
import Playlist from './Playlist';
import Button from '../components/html/Button';
import { useTranslation } from 'react-i18next';
import { View } from '../pages/Home';
import './PlaylistBar.css';

type PlaylistBarProps = {
    onSelect: (view: View) => void;
};

export function PlaylistBar({ onSelect }: PlaylistBarProps) {
    const { t } = useTranslation("Playlist"); 
    const [ opened, setOpened ] = useState(true);
    return (
        <Div className='side-bar' style={{
            width:opened ? '425px' : '120px',
            transition: 'width 0.3s ease',
            paddingLeft: 'var(--default-margins)'
            }}>
            <Div className='side-bar-title'>
                {opened && <h2 id='playlist-bar-h2'>My Playlists</h2>}
                <Button onClick={() => {setOpened(!opened)}}>x</Button>
                
            </Div>
            
            <hr/>
            <Playlist opened={opened} onClick={() => onSelect('projects')} src={'/assets/black.png'} title={t('projectsTitle')} desc={t('projectsDesc')}/>
            <Playlist opened={opened} onClick={() => onSelect('about')} src={'/assets/black.png'} title={t('aboutMeTitle')} desc={t('aboutMeDesc')}/>
            <Playlist opened={opened} onClick={() => onSelect('contact')} src={'/assets/black.png'} title={t('contactMeTitle')} desc={t('contactMeDesc')}/>
            <Playlist opened={opened} onClick={() => onSelect('music')} src={'/assets/black.png'} title={t('tylersFoodReviewTitle')} desc={t('tylersFoodReviewDesc')}/>
            <Playlist opened={opened} onClick={() => onSelect('food')} src={'/assets/black.png'} title={t('myFavouriteMusicTitle')} desc={t('myFavouriteMusicDesc')}/>

        </Div>

    );
}

export default PlaylistBar;
