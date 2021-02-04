import React, { Component } from 'react';
import Header from './components/header';
import './App.scss';
import HeadLine from './components/headline/'

class App extends Component {

render(){
  return (
    <div className="App">
         <Header />
         <section className="main">
         <HeadLine header="Posts" desc="bleh bla bla" />
         </section>
    </div>
  );
}
}

export default App;
