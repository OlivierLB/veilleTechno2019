import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

//Reducers
import header from './redux/reducers/Header'

const store = createStore(
    combineReducers({
        header
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Header/>
            <Body />
        </Provider>
    );
  }
}

export default App;
