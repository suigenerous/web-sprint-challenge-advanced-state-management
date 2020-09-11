import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getSmurfsAction, postSmurfAction} from '../actions';
import SmurfCard from './SmurfCard'
import SmurfForm from './SmurfForm'
import "./App.css";

function App(props){
  // destucture props here

  const {smurfData, fetchError, smurfToAdd, didSmurfPost, postError, getSmurfsAction, postSmurfAction} = props

  // grab smurf data from api here
  useEffect(() => {
    getSmurfsAction()
  },[getSmurfsAction, didSmurfPost])

  // console.log('smurfData', smurfData);
  // return JSX here
  return(
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <h2>Smurf Form</h2>
      <SmurfForm onSubmit = {props.postSmurfAction}/>
      <h2>Smurf Cards</h2>
      {smurfData.map(smurf => {
        return <SmurfCard key = {smurf.id} smurf = {smurf}/>
      })}
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
