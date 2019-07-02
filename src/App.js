import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header'
import { GlobalStyle } from './statics/iconfont/iconfont';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <GlobalStyle/>
    </Provider>
  );
}

export default App;
