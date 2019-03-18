import * as React from 'react';
import { Album } from '../models';
import './Album.css';

type AlbumProps = {
    album: Album;
}

const AlbumComponent = ({ album }: AlbumProps) => (
    <button className="album-button" onClick={() => console.log('album clicked')}>
        <img className="album-art" src={album.albumArt} />
        <h1 className="album-title">{album.title}</h1>
        <div className="album-artist">{album.artist}</div>
    </button>
)

export default AlbumComponent;