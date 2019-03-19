import * as React from 'react';
import './App.css';
import { albums } from './stub-data';
import { AlbumComponent } from './components';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>
                        &#9835; &#9835; &#9835;
                    </h1>
                    <h1 className="App-title">Styled Components Workshop</h1>
                </header>
                <div className="album-container">
                    {albums.map((album, i) => (
                        <AlbumComponent key={i} album={album} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
