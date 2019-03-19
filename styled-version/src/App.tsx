import * as React from 'react';
import './App.css';
import { albums } from './stub-data';
import { AlbumComponent, fadeSlideFromLeft } from './components';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    animation: ${fadeSlideFromLeft} 0.75s ease-in-out;
`;

const AlbumContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;



class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        &#9835; &#9835; &#9835;
                    </h1>
                    <Title>Styled Components Workshop</Title>
                </header>
                <AlbumContainer>
                    {albums.map((album, i) => (
                        <AlbumComponent key={i} album={album} />
                    ))}
                </AlbumContainer>
            </div>
        );
    }
}

export default App;
