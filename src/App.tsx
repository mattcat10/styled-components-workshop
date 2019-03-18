import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import { albums } from './stub-data';
import { AlbumComponent } from './components';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>  &#9835; &#9833; &#9833; &#9833; &#9835; &#9835;
</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Styled Components Workshop</h1>
          <div className="muzieknootjes">
  <div className="noot-1">
  &#9835; &#9833; &#9833; &#9833; &#9835; &#9835;
</div>
</div>
        </header>
        <p className="App-intro">
          Recently Played
        </p>
        <div>
          { albums.map( album => (
            <AlbumComponent album={album}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
