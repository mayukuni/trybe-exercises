import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstButtonClicks: 0,
      secondButtonClicks: 0,
      thirdButtonClicks: 0
    }
    this.firstButton = this.firstButton.bind(this);
    this.secondButton = this.secondButton.bind(this);
    this.thirdButton = this.thirdButton.bind(this);
  }

  firstButton = () => {
    this.setState((previousState, _props) => ({
      firstButtonClicks: previousState.firstButtonClicks + 1
    }), () => {
      console.log(`Botão 1 ${this.changeColor(this.state.firstButtonClicks)}`)
    })
  }
  // firstButton() {
  //   this.setState(({ firstButtonClicks }) => ({
  //     firstButtonClicks: firstButtonClicks + 1,
  //   }), () => {
  //     console.log(`Botão 1 ${this.changeColor(this.state.firstButtonClicks)}`);
  //   });
  // }

  secondButton = () => {
    this.setState((previousState, _props) => ({
      secondButtonClicks: previousState.secondButtonClicks + 1
    }), () => {
      console.log(`Botão 2 ${this.changeColor(this.state.secondButtonClicks)}`)
    })
  }

  thirdButton = () => {
    this.setState((previousState, _props) => ({
      thirdButtonClicks: previousState.thirdButtonClicks + 1
    }),() => {
      console.log(`Botão 3 ${this.changeColor(this.state.thirdButtonClicks)}`)
    })
  }

  changeColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { firstButtonClicks, secondButtonClicks
    , thirdButtonClicks } = this.state;
    return <div>
      <button 
      onClick={this.firstButton}
      style={{ backgroundColor: this.changeColor(firstButtonClicks) }}
      >
        {this.state.firstButtonClicks}
      </button>

      <button 
      onClick={this.secondButton}
      style={{ backgroundColor: this.changeColor(secondButtonClicks) }}
      >
        {this.state.secondButtonClicks}
      </button>

      <button 
      onClick={this.thirdButton}
      style={{ backgroundColor: this.changeColor(thirdButtonClicks) }}
      >
        {this.state.thirdButtonClicks}
      </button>
    </div>
  }
}

export default App;
