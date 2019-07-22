import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import { GlobalStyle } from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
        <GlobalStyle/>
      </Provider>
    );
  }
}

export default App;
