import * as React from 'react';
import { Album } from '../models';
import './Album.css';

type AlbumProps = {
    album: Album;
}

const AlbumComponent = ({ album }: AlbumProps) => (
    <div className="album-component">
        <img className="album-art" src={album.albumArt} />
        <h1 className="album-title">{album.title}</h1>
        <div className="album-artist">{album.artist}</div>
        <button disabled={album.soldOut} className="album-button round-button" onClick={() => console.log('album clicked')}>
            {album.soldOut ? 'Sold Out' : 'Buy Album' }
        </button>
    </div>

)

export default AlbumComponent;