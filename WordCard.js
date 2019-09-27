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
               
            <h3>จงเรียงประโยคต่อไปนี้ให้ถูกต้อง</h3>
                
                {  
                Array.from(this.state.chars).map((c, i) => <CharacterCard value = {c} key = {i} 
                attempt={this.state.attempt}
                activationHandler = {this.activationHandler} />
                )
                }
               <p>Round : {this.state.attempt}</p>
               <p>Hint : next exam</p>
                <h1><font color="green">{this.state.completed? "Congratulation  You Win !!" : ""}</font></h1>
                </div>	           
            );	       
               

    } 
} 