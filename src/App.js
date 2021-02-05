import React, { Component } from 'react';
import Header from './components/header';
import './App.scss';
import HeadLine from './components/headline/';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { fetchPosts } from './action/index'

import { connect } from 'react-redux';


class App extends Component {

constructor(props){
    super(props)
  }

fetch = () => {
  this.props.fetchPosts();
}

render(){

  const { posts} = this.props

  const tempArr = {
    fName: "ewew",
    lName: "wewe",
    age: 23,
    online: 1,
  }
  
  const configButton = {
    buttonText: "Get posts",
    emitEvent: this.fetch,
  }

  return (
    <div className="App">
         <Header />
         <section className="main">
         <HeadLine header="Posts" desc="bleh bla bla" tempArr={tempArr} />
         <SharedButton {...configButton} />

         {posts.length > 0 && 
          <div>
            {posts.map((post,index)=> {
              const { title, body} = post;
              const configList = {
                title,
                desc: body
              };
              return(
              <ListItem  key={index} {...configList} /> )
            })}
          </div>}
         </section>
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps,{fetchPosts})(App);
