import React, { Component } from 'react';
import logo from './logo.svg';

import { Flex, Box } from '@rebass/grid'
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import {AutoComplete} from 'primereact/autocomplete';

class App extends Component {
  render() {
    return (
      <Flex className="App">
          <Box width={1/2} px={2}>
              Half width
          </Box>
          <Box width={1/2} px={2}>
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <AutoComplete/>
                  Learn React
              </header>
          </Box>
      </Flex>
    );
  }
}

export default App;
