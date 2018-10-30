import * as React from 'react';
//import { Component } from 'react';
import MyTable from './table/table';

import './App.scss';

import logo from './logo.svg';
import { MyName } from './table/interface';

class App extends React.Component {

  state = {
    characters: MyName[4] = [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ]
  }

  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <MyTable>{this.state.characters}</MyTable>
        </div>
      </div>
    );
  }

  removeCharacter = (index: number) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

}

export default App;
