import * as React from 'react';
import { Album } from '../models';
import styled from 'styled-components';
import { RoundButton } from './RoundButton';

type AlbumProps = {
    album: Album;
}

const AlbumContainer = styled.div`
    margin: 1rem;
`;

const AlbumArt = styled.img`
    height: 200px;
`;

const AlbumTitle = styled.h1`
    margin-bottom: 0;
    color: ${(props) => props.theme.secondary};
`;

const AlbumArtist = styled.div`
    font-size: 1.5rem;
    font-style: italic;
    color: ${(props) => props.theme.secondary};
`;

const AlbumButton = styled(RoundButton)`
    background-color: ${(props) => props.theme.secondary};
    border: none;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    outline: none;
    cursor: pointer;
    color: ${(props) => props.theme.primary};
    min-width: 150px;
    min-height: 25px;
    font-size: 1rem;

    &:hover {
        background-color: grey;
    }

    ${(props: { soldOut: boolean}) => props.soldOut && 'background-color: grey'};
`;

const AlbumComponent = ({ album }: AlbumProps) => (
    <AlbumContainer>
        <AlbumArt src={album.albumArt} />
        <AlbumTitle>{album.title}</AlbumTitle>
        <AlbumArtist>{album.artist}</AlbumArtist>
        <AlbumButton soldOut={album.soldOut} disabled={album.soldOut} onClick={() => console.log('album clicked')}>
            {album.soldOut ? 'Sold Out' : 'Buy Album' }
        </AlbumButton>
    </AlbumContainer>

)

export default AlbumComponent;