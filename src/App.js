import React, { Component } from 'react';
import Header from './components/header';
import './App.scss';
import HeadLine from './components/headline/'

class App extends Component {

render(){

  const tempArr = {
    fName: "ewew",
    lName: "wewe",
    age: 23,
    online: 1,
  }
  return (
    <div className="App">
         <Header />
         <section className="main">
         <HeadLine header="Posts" desc="bleh bla bla" tempArr={tempArr} />
         </section>
    </div>
  );
}
}

export default App;
