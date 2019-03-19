import * as React from 'react';
import { albums } from './stub-data';
import { AlbumComponent, fadeSlideFromLeft } from './components';
import styled from 'styled-components';

const AppContainer = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

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
            <AppContainer>
                <AppHeader>
                    <h1>
                        &#9835; &#9835; &#9835;
                    </h1>
                    <Title>Styled Components Workshop</Title>
                </AppHeader>
                <AlbumContainer>
                    {albums.map((album, i) => (
                        <AlbumComponent key={i} album={album} />
                    ))}
                </AlbumContainer>
            </AppContainer>
        );
    }
}

export default App;
