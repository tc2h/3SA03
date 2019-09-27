import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
    }
   }
   
export default class WordCard extends Component {
    constructor(props){
        super(props)
       this.state = prepareStateFromWord(this.props.value)
   }
   activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({guess})
    if(guess.length == this.state.chars.length){
        if(guess.join('').toString() == this.state.word){
        this.setState({guess: [], completed: true})
        }else{
        this.setState({guess: [], attempt: this.state.attempt + 1})
        }
        }
    }
    render(){	    
        return(	       
            <div className="App">	            
            <div className="App">	

                <p>Hint : The first program in C </p>
                {
                Array.from(this.state.chars).map((c, i) => <CharacterCard value = {c} key = {i} 
                attempt={this.state.attempt}
                activationHandler = {this.activationHandler} />
                )
                }
               <p>Round : {this.state.attempt}</p>
               <p>Hint : The first program in C </p>
                <p>{this.state.completed? "You Win !!" : ""}</p>
                <h1><font color="green">{this.state.completed? "You Win !!" : ""}</font></h1>
                </div>	           
            );	       

    } 
} 