import React, { Component } from "react";
import { connect } from "react-redux";
import {getSmurfsAction, postSmurfAction} from '../actions';
import "./App.css";

function App(props){
  console.log(props);
  return(
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfData: state.smurfData,
    fetchError: state.fetchError,
    smurfToAdd: state.smurfToAdd,
    didSmurfPost: state.didSmurfPost,
    postError: state.postError
  }
}

export default connect(mapStateToProps, {getSmurfsAction, postSmurfAction})(App);
