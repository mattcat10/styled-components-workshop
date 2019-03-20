import * as React from 'react';
import { albums } from './stub-data';
import { AlbumComponent, fadeSlideFromLeft, rotate } from './components';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';

const AppContainer = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: ${(props) => props.theme.primary};
`;

const Title = styled.h1`
    font-size: 1.5em;
    animation: ${fadeSlideFromLeft} 0.75s ease-in-out;
    display: flex;
    justify-content: center;
`;

const AlbumContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.primary};

    @media only screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const RotatingText = styled.div`
    animation: ${rotate} 10s infinite linear;
    padding: 0 1rem 0 1rem;
`;

type State = {
    theme: string;
}






class App extends React.Component<{}, State> {
    constructor(props: {}, state: State) {
        super(props, state);
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme = () => {
        this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
    }

    public render() {
        const { theme } = this.state;
        return (
            <ThemeProvider theme={theme === 'light' ? light : dark}>
                <AppContainer>
                    <AppHeader>
                        <button onClick={this.toggleTheme}>Toggle theme</button>
                        <h1>
                            &#9835; &#9835; &#9835;
                    </h1>
                        <Title><RotatingText>🎵</RotatingText>Styled Components Workshop<RotatingText>🎵</RotatingText></Title>
                    </AppHeader>
                    <AlbumContainer>
                        {albums.map((album, i) => (
                            <AlbumComponent key={i} album={album} />
                        ))}
                    </AlbumContainer>
                </AppContainer>
            </ThemeProvider>

        );
    }
}

export default App;
