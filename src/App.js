import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import { GlobalStyle } from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
          <GlobalStyle/>
        </div>
      </Provider>
    );
  }
}

export default App;
