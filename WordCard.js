import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
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
 return {
    return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
 }
}
   export default class WordCard extends Component {
    }
   }

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
       this.state = prepareStateFromWord(this.props.value)
   }

    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            if(guess === this.state.word){
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
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
    render(){	    
        return(	       
            <div className="App">	            
                {
                Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} />)
                Array.from(this.props.value).map(
                    (c, i) => <CharacterCard value={c} key={i} 
                    attempt={this.state.attempt}
                    activationHandler={this.activationHandler} />)

                Array.from(this.state.chars).map((c, i) => <CharacterCard value = {c} key = {i} 
                attempt={this.state.attempt}
                activationHandler = {this.activationHandler} />
                )
                }
                <p>Round : {this.state.attempt}</p>
                <p>{this.state.completed? "you win" : ""}</p>
            </div>
        );
    }

} 

               <p>Round : {this.state.attempt}</p>
                <p>{this.state.completed? "you win !!" : ""}</p>
                </div>	           
            );	       

    } 
}  